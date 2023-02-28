const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('in the first middleWare')
    next(); // allows req to contunue to next middleware in line
})

app.use((req,res,next)=>{
    console.log('in 2nd middleWare');
    res.send('<h1>Hello World</h1>')
})

app.listen(3000);