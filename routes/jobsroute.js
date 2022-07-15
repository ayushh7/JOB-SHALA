const express = require('express');
const job = require('../db/Job.js');
const {createjob} = require('../controller/jobcontroller.js');

const router = express.Router();

router.get('/',(req, res) => {
    res.render('jobs')
})



router.post('/jobforms', createjob);


module.exports  =  router;