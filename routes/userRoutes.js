const express = require('express');
const router  = express.Router();
const {indexView} = require('../controllers/User.controllers')
const uploadPicture = require('../config/cloudinary')

/* GET home page */
router.get('/', indexView);

module.exports = router;
