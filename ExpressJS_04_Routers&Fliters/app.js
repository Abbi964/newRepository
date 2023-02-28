const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// importing routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// making a middleware to parse body of form submit
app.use(bodyParser.urlencoded({extended:false}))       // it have next() inside it

app.use("/admin",adminRoutes);

app.use("/shop",shopRoutes);

// for page not found
// this works because .use() only checks if url start with given path (here '/') 
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);