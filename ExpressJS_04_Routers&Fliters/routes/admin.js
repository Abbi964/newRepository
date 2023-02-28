const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/products" method="post"><h1>Welcome to the product page </h1><input type="text" placeholder="product title" name="title"><br><input type="number" placeholder="product size" name="size"><br><button type="submit">Add Product</button></form>');
})

router.post('/products',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/admin/add-product')
})

module.exports = router;