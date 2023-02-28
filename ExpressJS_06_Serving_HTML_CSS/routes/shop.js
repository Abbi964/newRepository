const path = require('path')

const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('main page');
    res.sendFile(path.join(__dirname,'..','views','shop.html'))
})

router.get('/contectus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contectus.html'))
})

router.post('/success',(req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(__dirname,'..','views','success.html'))
})

module.exports = router;