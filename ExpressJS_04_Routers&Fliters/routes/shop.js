const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('main page');
    res.send('<h1>Welocme to the main page</h1>')
})

module.exports = router;