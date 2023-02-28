const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

// importing routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// making a middleware to parse body of form submit
app.use(bodyParser.urlencoded({extended:false}))       // it have next() inside it

// making 'public' folder static
app.use(express.static(path.join(__dirname,'public')))

app.use("/admin",adminRoutes);

app.use(shopRoutes);

// for page not found
// this works because .use() only checks if url start with given path (here '/') 
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);