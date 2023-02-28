const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// making a middleware to parse body of form submit
app.use(bodyParser.urlencoded({extended:false}))       // it have next() inside it

app.get('/add-product',(req,res,next)=>{
    res.send('<form action="/products" method="post"><h1>Wlcome to the product page </h1><input type="text" placeholder="product title" name="title"><br><input type="text" placeholder="product size" name="size"><br><button type="submit">Add Product</button></form>');
})

app.post('/products',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/add-product')
})

app.get('/',(req,res,next)=>{
    console.log('main page');
    res.send('<h1>Welocme to the main page</h1>')
})


app.listen(3000);