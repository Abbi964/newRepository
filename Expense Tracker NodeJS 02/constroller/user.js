const path  = require('path')

const User = require('../model/user')

exports.getSignUpPage = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','signup.html'));
}

exports.postSignupPage = async(req,res,next)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    let [user,created] = await User.findOrCreate({
        where:{email:email},
        defaults:{
            name:name,
            email:email,
            password:password,
        }
    })
    res.json(created);
}