const express=require('express');
const router=express.Router();
const checkEmployer = require('../middleware/checkEmployer');
const {createjob,getAllJobs} = require('../controller/jobcontroller');
const Job = require('../db/Job.js');


router.route('/')
.get(getAllJobs)
.post(createjob)


router.route('/new').get((req, res) => {
    res.render('jobs/jobform');
})


router.get('/:id', async (req, res) => {
    const job = await Job.findById(req.params.id);
    res.render('jobs/jobpage',{job});
});


module.exports=router;