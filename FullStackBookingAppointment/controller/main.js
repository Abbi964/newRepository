const User = require('../model/user');
const path = require('path')

exports.getMainPage = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'))
}

exports.postMainPage = async (req,res,next)=>{
    const name = req.body.name
    const email = req.body.email
    const phone_no = req.body.phone
    const newuser = await User.create({
        name: name,
        email: email,
        phone_no: phone_no
    })
    const idJson = JSON.stringify(newuser.id)
    res.send(idJson)

}

exports.deleteUser = (req,res,next)=>{
  const userId = req.params.userId;
  User.findByPk(userId)
    .then(user=>{
      user.destroy();
      res.send(JSON.stringify('user deleted'))
    })
    .catch(err=>{
      console.log(err)
    })  
}

exports.editUser = (req,res,next)=>{
  let userId = req.params.userId;
  User.findByPk(userId)
    .then(user=>{
      res.send(JSON.stringify(user))
    })
    .catch(err=>{
      console.log(err);
    })
}

exports.getAllUsers = (req,res,next)=>{
  User.findAll()
    .then(allUsers=>{
      res.send(JSON.stringify(allUsers))
    })
    .catch(err=>{
      console.log(err);
    })
}

exports.modifyUser = (req,res,next)=>{
  User.update({
    name: req.body.name,
    email: req.body.email,
    phone_no: req.body.phone,
  },
  {
    where:{id: req.body.id},
  })
  res.send(JSON.stringify('user modified'))
}