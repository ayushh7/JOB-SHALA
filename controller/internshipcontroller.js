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



