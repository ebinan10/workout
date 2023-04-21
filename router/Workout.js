const express = require('express');
const Control = require('../controller/workout')
const VerifyAccessToken =require('../controller/refreshtoken')

const verify = VerifyAccessToken.VerifyAccessToken;
const router = express.Router()
router.get('/', verify ,Control.GetWorkOut)
router.get('/user/workout/:id', verify,Control.GetUserWorkOut)
router.get('/workout/:id', verify,Control.GetEachWorkOut)
router.post('/', verify,Control.CreateWorkOut)
router.patch('/:id', verify,Control.UpdateWorkOut)
router.delete('/:id', verify,Control.DeleteWorkOut)
 
module.exports = router;    