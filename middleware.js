const Job = require('./db/Job');
const Internship = require('./db/Internship');
const ExpressError = require('./utils/ExpressError');
const {jobSchema, internshipSchema} = require('./schemas.js')

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error','You must be signed in first!');
        return res.redirect('/login')
    }
    next();
}

module.exports.validateJob = (req,res,next)=>{
    const {error} = jobSchema.validate({...req.body,...req.user});
    if(error){
        const msg = error.details.map(el=>el.message).join(','); //Iterating over the details object of error returned by JOI
        throw new ExpressError(400,msg);
    }
    else{
        next();
    }
}


module.exports.validateInternship = (req,res,next)=>{
    const {error} = internshipSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el=>el.message).join(','); //Iterating over the details object of error returned by JOI
        throw new ExpressError(400,msg);
    }
    else{
        next();
    }
}


// module.exports.isAuthor = async(req,res,next)=>{
//     const {id} = req.params;
//     const campground = await Campground.findById(id);
//     if(!campground.author.equals(req.user._id)){
//         req.flash('error','You do not have permission to do that');
//         return res.redirect(`/campgrounds/${id}`);
//     }
//     next();
// }

// module.exports.isReviewAuthor = async(req,res,next)=>{
//     const {id, reviewId} = req.params;
//     const review = await Review.findById(reviewId);
//     if(!review.author.equals(req.user._id)){
//         req.flash('error','You do not have permission to do that');
//         return res.redirect(`/campgrounds/${id}`);
//     }
//     next();
// }
