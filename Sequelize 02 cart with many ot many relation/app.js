const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// importing sequelize from database
const sequelize = require('./util/database')

const Product = require('./models/product')
const User = require('./models/user')
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item')
const Order = require('./models/order')
const OrderItem = require('./models/order-item')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// manually adding user in request
app.use((req,res,next)=>{
    User.findByPk(1)
        .then(user=>{
            req.user = user;
            next();
        })
        .catch(err=>console.log(err))
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// relating Product and User
Product.belongsTo(User,{constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);      // optional
// now user and cart
User.hasOne(Cart);
Cart.belongsTo(User)        // optional
// now product and cart
Cart.belongsToMany(Product,{through: CartItem});
Product.belongsToMany(Cart,{through: CartItem});
// now order to user and product
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, {through : OrderItem});
// syncing models to database
// and creating a dummy user

// sequelize.sync({force: true})  // force: true is only used so that it forces our changes and creats a  new db. It is not used in production
sequelize.sync()
    .then(msg=>{
        return User.findByPk(1)
    })
    .then((user)=>{
        if(!user){
            return User.create({name: 'Abhinav', email: 'fake@fake.com'});
        }
        return user
    })
    .then((user)=>{
        // making a dummy cart of user
        // return user.createCart();
    })
    .then(cart=>{
        app.listen(3000);
    })
    .catch(err=>console.log(err))

