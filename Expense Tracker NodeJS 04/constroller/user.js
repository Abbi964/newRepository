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

exports.getLoginPage = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','login.html'))
}

exports.postLoginPage = async(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    let user = await User.findOne({where:{email:email}});
    // checking if user email exists in DB or not
    if(user===null){
        res.json('Eror 404 User not found')
    }
    else if(user.dataValues.password != password){
        res.json('Eror 401 User not authorized')
    }
    else{
        res.json('User login sucessful')
    }
}