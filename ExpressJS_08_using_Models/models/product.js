
const fs = require('fs')
const path = require('path');

let pathOfFile = path.join(__dirname,'..','data','products.json')

const getProductsFromFile = (cb) =>{
    // reading from file
    fs.readFile(pathOfFile,(err,fileContents)=>{
        // checking if file is empty
        if(err){
            cb([])
        }
        else{
            cb(JSON.parse(fileContents))
        }   
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile((products)=>{
            products.push(this)
            fs.writeFile(pathOfFile,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        })
    }
   
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

}