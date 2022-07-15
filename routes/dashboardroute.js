const express=require('express');
const router=express.Router();

router.get('/employerdashboard', (req, res) => {
    res.render('dashboard/employerdashboard');
})

router.get('/studentdashboard', (req, res) => {
    res.render('dashboard/studentdashboard');
})

module.exports=router;