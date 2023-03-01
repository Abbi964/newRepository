const path = require('path')

exports.getAddProductPage = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))
}

exports.postToAddProductsPage = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/admin/add-product')
}

exports.getTOShopPage = (req,res,next)=>{
    console.log('main page');
    res.sendFile(path.join(__dirname,'..','views','shop.html'))
}