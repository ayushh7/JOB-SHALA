const express=require('express');
const router=express.Router();
const {createinternship, showInternship, deleteInternship} = require('../controller/internshipcontroller');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, validateInternship} = require('../middleware')
const Internship = require('../db/Internship.js');



router.route('/')
.get(async (req, res) => {
    const internships = await Internship.find();
    res.render('internships/internships',{internships});
})
.post(isLoggedIn,validateInternship,createinternship);

router.route('/new').get(isLoggedIn,(req, res) => {
    res.render('internships/internshipform');
})

router.route('/:id')
    .get(catchAsync(showInternship))
    .delete(isLoggedIn, catchAsync(deleteInternship));


module.exports=router;