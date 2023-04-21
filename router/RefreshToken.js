const express = require('express');
const RefreshToken = require('../controller/refreshtoken')
const router = express.Router();

router.get('/', RefreshToken.createNewAccesstoken )
router.get('/logout', RefreshToken.Logout)

module.exports = router  

