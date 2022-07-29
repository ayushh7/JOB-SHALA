const express=require('express');
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn} = require('../middleware')
const {studentvalid} = require('../middleware')



router.get('/employerdashboard', isLoggedIn, (req, res) => {
    res.render('dashboard/employerdashboard');
})

router.get('/studentdashboard', isLoggedIn, studentvalid, (req, res) => {    
    res.render('dashboard/studentdashboard',{jobApplications : req.user.Jobapplication});
})

module.exports=router;
