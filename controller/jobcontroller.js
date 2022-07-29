const Job = require('../db/Job.js');
const express = require('express');
const Features = require('../utils/features');

require('dotenv').config();

module.exports.createjob  = async (req,res,next) => {
  
    try {
    
        // console.log(req.body);
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
        job.Employer = req.user._id;
    
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

module.exports.showJob = async(req,res)=>{
    const {id} = req.params;
    const job = await Job.findById(id)
    // .populate({
    //     path : '',
    //     populate : {
    //         path : 'author'
    //     }
    // }).populate('author');
    if(!job){
        req.flash('error','Cannot find that job!');
        return res.redirect('/jobs'); //Necessary to redirect
    }
    res.render('jobs/jobpage',{job});
};

module.exports.deleteJob = async(req,res)=>{
    const {id} = req.params;
    const deletedJob = await Job.findByIdAndDelete(id);
    req.flash('success','Successfully deleted a Job!');
    res.redirect('/jobs');
};

module.exports.renderEditForm = async(req,res)=>{
    const {id} = req.params;
    const job = await Job.findById(id);
    if(!job){
       req.flash('error','Cannot find that job!');
       return res.redirect('/jobs'); //Necessary to redirect
   }
    res.render('jobs/jobedit',{job});
};

module.exports.updateJob = async(req,res)=>{
    const {id} = req.params;
    console.log(req.body);
    const job = await Job.findByIdAndUpdate(id,{$set : req.body},{new:true});
    await job.save();
    req.flash('success','Successfully updated job!')
    res.redirect(`/jobs/${job._id}`);
};


exports.getAllJobs = (async (req, res, next) => {
    let resultperpage=4;
    
    console.log("Query: ", req.query);

    let features=new Features(Job.find(), req.query)
    .search()
    .filter()

    let jobs = await features.query;

    let sze=jobs.length;
    
    let currentPage=Number(req.query.page||1);

    if (!jobs) 
    {
      return next(new Apperror('jobs not found', 404))
    }
    
    if (jobs.length==0) 
    {
      res.send('nojobs found');
      return;
    }

    req.query.mi = Number(req.query.mi||0);
   
    res.render('jobs/jobs',{jobs,page: currentPage, mxLength: sze});

  })