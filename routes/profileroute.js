const express=require('express');
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isStudent} = require('../middleware')
const User = require('../db/User.js');

router.get('/:id', isLoggedIn, isStudent, (req, res) => {
    res.render('profile/student');
})


// router.get('/studentdashboard',isLoggedIn, async (req, res) => {    
//     const user = await User.findById(req.user._id).populate('Jobapplication');
 
//     res.render('dashboard/studentdashboard',{jobApplications : user.Jobapplication});
// })

module.exports=router;