const mainController = require('../controller/main')

const express = require('express')
const router = express.Router();

router.get('/',mainController.getMainPage);

router.put('/modifyUser',mainController.modifyUser);

router.post('/',mainController.postMainPage);

router.delete('/delete/:userId',mainController.deleteUser);

router.get('/edit/:userId',mainController.editUser);

router.get('/userlist',mainController.getAllUsers)


module.exports = router;
