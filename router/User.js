const express = require('express');
const router = express.Router();
const user = require('../controller/user');
const VerifyAccessToken =require('../controller/refreshtoken');
const verify = VerifyAccessToken.VerifyAccessToken;

router.get('/getuser',verify, user.GetUsers)
router.get('/:id', verify , user.GetOneUser)
router.post('/' , user.CreateUser)
router.post('/login' , user.Login)
router.patch('/password/:token'  , user.updateUserPassword )
router.patch('/detail/:id', verify ,user.updateUserDetail )
router.post('/password/token', user.SendPasswordToken )
module.exports = router;   