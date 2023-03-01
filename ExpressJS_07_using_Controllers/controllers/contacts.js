const path = require('path')

exports.getTOContactusPage = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contectus.html'))
}

exports.postToSuccessPage = (req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(__dirname,'..','views','success.html'))
}