const express=require('express');
const router=express.Router();
const {createinternship} = require('../controller/internshipcontroller');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, validateInternship} = require('../middleware')
const Internship = require('../db/Internship.js');



router.route('/').get(async (req, res) => {
    const internships = await Internship.find();
    res.render('internships/internships',{internships});
})
.post(isLoggedIn,validateInternship,createinternship);

router.route('/new').get(isLoggedIn,(req, res) => {
    res.render('internships/internshipform');
})


router.get('/:id', async (req, res) => {
    const internship = await Internship.findById(req.params.id);
    res.render('internships/internshippage',{internship});
});


module.exports=router;