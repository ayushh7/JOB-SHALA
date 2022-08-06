const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const Job = require('./Job');
const Internship = require('./Internship');



const userSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
        max: 255
    },

    LastName: {
        type: String,
        required: false,
        max: 255
    },

    Company : {
        type : String,
        default : null  
    },

    College : {
        type : String,
        default : null  
    },

    Graduation : {
        type : Number,
        default : null
    },

    role : {
        type : String,
        default : 'Student'
    },

    Jobapplication : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Job'
        }
    ],
    
    Internshipapplication : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Internship'
        }
    ],

    Linkedin : {
        type : String,
        default : null
    },

    Github : {
        type : String,
        default : null
    },

    Other : {
        type : String,
        default : null
    },
    
    Gender : {
        type : String,
        default : null
    },

    Dateofbirth : {
        type : String,
        default : null
    },

    Joining : {
        type : Number,
        default : null
    },

    Mobile : {
        type : Number,
        default : null
    },

    Field : {
        type : String,
        default : null
    },

    Degree : {
        type : String,
        default : null
    },

    Expertise : {
        type : String,
        default : null
    },

    State : {
        type : String,
        default : null
    },

    City : {
        type : String,
        default : null
    },

    Address : {
        type : String,
        default : null
    },

    PIN : {
        type : Number,
        default : null
    }

   
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = new mongoose.model('User', userSchema);