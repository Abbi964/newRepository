const fs = require('fs');
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename),'data','cart.json');

module.exports = class Cart{
    static addProduct(id,productPrice){
        // fetch the previous cart
        fs.readFile(p,(err,fileContent)=>{
            let cart = {products: [], totalPrice: 0}
            if(!err){
                cart = JSON.parse(fileContent);
            }
            //analyse the cart => find exixting product
            let existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            let existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            // add new product or increase quantity
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                // replacing updated product with existing product
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct;
            }
            else{
                updatedProduct = {id:id, qty: 1};
                // adding product in cart.products
                cart.products = [...cart.products,updatedProduct]
            }
            // increase total price
            cart.totalPrice = cart.totalPrice + +productPrice
            // saving this in the file
            fs.writeFile(p,JSON.stringify(cart), (err)=>{
                console.log(err);
            });
        })
    }
}