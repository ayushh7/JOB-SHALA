const express=require('express');
const router=express.Router();
const {isLoggedIn} = require('../middleware')
const User = require('../db/User.js');

router.get('/:id', isLoggedIn, (req, res) => {
    res.render('profile/student');
})


// router.get('/studentdashboard',isLoggedIn, async (req, res) => {    
//     const user = await User.findById(req.user._id).populate('Jobapplication');
 
//     res.render('dashboard/studentdashboard',{jobApplications : user.Jobapplication});
// })

module.exports=router;