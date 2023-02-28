const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')

const express = require('express')
const app = express();

// adding body-parser 
app.use(bodyParser.urlencoded({extended:false}))

//making public static
app.use(express.static(path.join(__dirname,'public')))

app.get('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','login.html'))
})

app.post('/',(req,res,next)=>{
    if(req.body.message){
        fs.appendFileSync(path.join(__dirname,'public','message.txt'),`  ${req.body.username} :${req.body.message} `)
    }

    // sending chat.html 
    res.sendFile(path.join(__dirname,'views','chat.html'))
})

// for 404 page
app.use((req,res,next)=>{
    res.send('<h1>EROR 404 : Page not Found</h1><br><h2>Go to /login to login</h2>')
})

app.listen(3000)