const express=require('express');
const router=express.Router();


router.get('/jobs', (req, res) => {
    res.render('jobs/jobs')
})
router.get('/jobform', (req, res) => {
    res.render('jobs/jobform');
})
router.get('/jobpage', (req, res) => {
    res.render('jobs/jobpage');
})

module.exports=router;