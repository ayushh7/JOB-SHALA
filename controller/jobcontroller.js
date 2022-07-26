const Job = require('../db/Job.js');
const express = require('express');

require('dotenv').config();

module.exports.createjob  = async (req,res,next) => {
  
    try {
    
        console.log(req.body);

        const job = new Job({
            Name : req.body.Name,
            Descriptions : req.body.Descriptions,
            Company : req.user.Company,
            Lastdate : req.body.Lastdate,
            Startdate : req.body.Startdate,
            skills : req.body.skills,
            CTC : req.body.CTC, 
            Category : req.body.Category,
            // Employer : req.user,
            State : req.body.State,
            Location : req.body.Location,
            role : "job"
        });

        console.log(req.user);
    
        const isCreated = await job.save();

        console.log(isCreated);
        res.redirect('/jobs');
        if(isCreated)
        {
           console.log(isCreated);
           res.redirect('/jobs');
           req.flash('success_msg','Job Created Successfully');
        }
        else
        {
            console.log('Job not Created');
        }
    } 

    catch (err) {
       console.log(err); 
    }
    
}



