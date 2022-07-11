const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');


const userSchema = new mongoose.Schema({
    
    FirstName : {
        type : String,
        required : true,
        max : 255
    },

    LastName : {
        type :String,
        required : false,
        max :255
    },

    // email : {
    //     type : String,
    //     required: true,
    //     min: 6,
    //     max : 255
    // },

    // password : {
    //     type : String,
    //     required : true,
    //     min : 6,
    //     max : 1024
    // },
 
    date : {
        type : Date,
        default : Date.now
    },

    CompanyName : {
        type : String,
        default : null
    },

    Employer : {
        type : Boolean,
        default : false
    }
});

userSchema.plugin(passportLocalMongoose,{usernameField : 'email'});

module.exports =  new mongoose.model('User',userSchema);

