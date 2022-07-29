const express=require('express');
const router=express.Router();
const {createjob, getAllJobs, showJob, deleteJob,Applyjob} = require('../controller/jobcontroller');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, validateJob} = require('../middleware')
const Job = require('../db/Job.js');


router.route('/')
.get(catchAsync(getAllJobs))
.post(isLoggedIn,validateJob,catchAsync(createjob));

router.route('/new').get(isLoggedIn,(req, res) => {
    res.render('jobs/jobform');
})

router.route('/:id')
    .get(catchAsync(showJob))
    .delete(isLoggedIn, catchAsync(deleteJob))
    .post(isLoggedIn,catchAsync(Applyjob));

    


module.exports=router;