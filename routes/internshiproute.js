const express=require('express');
const router=express.Router();
const {createinternship, showInternship, deleteInternship, updateInternship, renderEditForm,  getAllInternships} = require('../controller/internshipcontroller');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isEmployer, validateInternship, isInternshipOwner} = require('../middleware')
const Internship = require('../db/Internship.js');



router.route('/')
.get(catchAsync(getAllInternships))
.post(isLoggedIn,validateInternship,createinternship);




router.route('/new').get(isLoggedIn,isEmployer,(req, res) => {
    res.render('internships/internshipform');
})
.post(isLoggedIn,isEmployer,validateInternship,createinternship);


router.route('/:id')
    .get(catchAsync(showInternship))
    .put(isLoggedIn, isInternshipOwner, validateInternship, catchAsync(updateInternship))
    .delete(isLoggedIn, catchAsync(deleteInternship));


router.get('/:id/edit', isLoggedIn, isInternshipOwner, catchAsync(renderEditForm));


module.exports=router;