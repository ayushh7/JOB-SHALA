const Job = require('../db/Job.js');
const express = require('express');

require('dotenv').config();


module.exports.createinternship  = async (req,res,next) => {

    
    try {
        const job = new Job({
            Name : req.body.Name,
            Descriptions : req.body.Descriptions,
            // Company : req.user.Company,
            Lastdate : req.body.Lastdate,
            Startdate : req.body.Startdate,
            // skills : req.body.skills,
            CTC : req.body.CTC, 
            Category : req.body.Category,
            // Employer : req.user
            Location : req.body.Location,
            role : "internship"
        });
    
        const isCreated = await job.save();

        console.log(isCreated);
        
        if(isCreated)
        {
           console.log(isCreated);
           res.redirect('/jobs');
           req.flash('success_msg','Internship Created Successfully');
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



