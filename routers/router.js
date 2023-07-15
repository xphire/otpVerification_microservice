const express = require('express');

const router = express.Router();


const generateOTP = require('../controllers/generateOTP');

const verifyOTP = require('../controllers/verifyOTP');


router.route('/generateOTP').post(generateOTP);

router.route('/verifyOTP').post(verifyOTP);

module.exports = router