const express=require('express');
const router=express.Router();
const {createinternship, showInternship, deleteInternship, updateInternship, renderEditForm} = require('../controller/internshipcontroller');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, validateInternship, isInternshipOwner} = require('../middleware')
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
    .put(isLoggedIn, isInternshipOwner, validateInternship, catchAsync(updateInternship))
    .delete(isLoggedIn, catchAsync(deleteInternship));

router.get('/:id/edit', isLoggedIn, isInternshipOwner, catchAsync(renderEditForm));


module.exports=router;