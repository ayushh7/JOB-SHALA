const Internship = require('../db/Internship.js');
const Features = require('../utils/features');
const express = require('express');

require('dotenv').config();

module.exports.getAllInternships = (async (req, res, next) => {
    let resultperpage=4;
    
    console.log("Query: ", req.query);

    let features=new Features(Internship.find(), req.query)
    .search()
    .filter()

    let internships = await features.query;

    let sze=internships.length;
    
    let currentPage=Number(req.query.page||1);

    if (!internships) 
    {
      return next(new Apperror('internships not found', 404))
    }
    
    if (internships.length==0) 
    {
      res.render('internships/nointernship');
      return;
    }

    req.query.mi = Number(req.query.mi||0);
   
    res.render('internships/internships',{internships,page: currentPage, mxLength: sze});

  })



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
        
        internship.Employer = req.user._id;
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

module.exports.showInternship = async(req,res)=>{
    const {id} = req.params;
    const internship = await Internship.findById(id)
    // .populate({
    //     path : '',
    //     populate : {
    //         path : 'author'
    //     }
    // }).populate('author');
    if(!internship){
        req.flash('error','Cannot find that internship!');
        return res.redirect('/internships'); //Necessary to redirect
    }
    
    res.render('internships/internshippage',{internship});
};

module.exports.deleteInternship = async(req,res)=>{
    const {id} = req.params;
    const deletedInternship = await Internship.findByIdAndDelete(id);
    req.flash('success','Successfully deleted an Internship!');
    res.redirect('/internships');
};

module.exports.renderEditForm = async(req,res)=>{
    const {id} = req.params;
    const internship = await Internship.findById(id);
    if(!internship){
       req.flash('error','Cannot find that internship!');
       return res.redirect('/internships'); 
   }
    res.render('internships/internshipedit',{internship});
};

module.exports.updateInternship = async(req,res)=>{
    const {id} = req.params;
    console.log(req.body);
    const internship = await Internship.findByIdAndUpdate(id,{$set : req.body},{new:true});
    await internship.save();
    req.flash('success','Successfully updated internship!')
    res.redirect(`/internships/${internship._id}`);
};



