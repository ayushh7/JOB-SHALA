const Internship = require('../db/Internship.js');
const express = require('express');

require('dotenv').config();


module.exports.createinternship  = async (req,res,next) => {

    
    try {
        console.log(req.body);
        const internship = new Internship({
            Name : req.body.Name,
            Descriptions : req.body.Descriptions,
            Company : req.user.Company,
            Lastdate : req.body.Lastdate,
            Startdate : req.body.Startdate,
            skills : req.body.skills,
            Stipend : req.body.Stipend, 
            Duration : req.body.Duration,
            // Employer : req.user
            State : req.body.State,
            Location : req.body.Location,
        });
    
        const isCreated = await internship.save();

        console.log(isCreated);
        
        if(isCreated)
        {
           console.log(isCreated);
           res.redirect('/internships');
           req.flash('success_msg','Internship Created Successfully');
        }
        else
        {
            console.log('Internship not Created');
        }
    } 
    catch (err) {
       console.log(err); 
    }    
}



