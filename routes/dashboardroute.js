const express=require('express');
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn} = require('../middleware')

router.get('/employerdashboard', isLoggedIn, (req, res) => {
    res.render('dashboard/employerdashboard');
})

router.get('/studentdashboard', isLoggedIn, (req, res) => {
    res.render('dashboard/studentdashboard');
})

module.exports=router;
