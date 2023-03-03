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

    static deleteProduct(id,productPrice){
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                return; // there is nothing in the cart so nothing to delete
            }
            const cart = JSON.parse(fileContent);
            const updatedCart = {...cart}
            const product = updatedCart.products.find(prod=>prod.id===id);
            if(!product){
                return
            }
            const productQty = product.qty;
            // removing product from updated cart
            updatedCart.products = updatedCart.products.filter(prod=>prod.id!==id);

            // substracting deleted products price from total price
            updatedCart.totalPrice = updatedCart.totalPrice - productQty * productPrice
            // updating cart.json
            fs.writeFile(p,JSON.stringify(updatedCart),(err)=>{
                console.log(err)
            })

        })
    }

    static getCart(cb){
        fs.readFile(p,(err,fileContent)=>{
            const cart = JSON.parse(fileContent)
            if(err){
                cb(null);
            }
            else{
                cb(cart);
            }
        })
    }
}