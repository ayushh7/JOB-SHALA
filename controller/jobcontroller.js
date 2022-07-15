const Job = require('../db/Job.js');
const express = require('express');

require('dotenv').config();


module.exports.createjob  = async (req,res,next) => {
  
    try {
        const job = new Job({
            Name : req.body.Name,
            Descriptions : req.body.Descriptions,
            Company : req.body.Company,
            Lastdate : req.body.Lastdate,
            perks : req.body.perks,
            CTC : req.body.CTC, 
            Category : req.body.Category,
            // Employer : req.user.id
        });
        
        const isCreated = await job.save();
        if(isCreated)
        {
           console.log(job);
        }
        else{
            console.log('Job not Created');
        }
        
        
    } catch (err) {
       console.log(err); 
    }

}