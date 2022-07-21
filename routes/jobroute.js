const express=require('express');
const router=express.Router();
const checkEmployer = require('../middleware/checkEmployer');
const {createjob} = require('../controller/jobcontroller');
const Job = require('../db/Job.js');

router.get('/jobs', async (req, res) => {
    const jobs = await Job.find();
    res.render('jobs/jobs',{jobs});
})


router.get('/jobform', (req, res) => {
    res.render('jobs/jobform');
})


router.get('/jobpage', (req, res) => {
    res.render('jobs/jobpage');
})


router.post('/jobform',checkEmployer,createjob);


module.exports=router;