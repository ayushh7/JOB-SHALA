const mongoose = require('mongoose');

const InternshipSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true,
        max : 255
    },

    Company : {
        type : String,
        required: true,
        max : 255
    },

    Lastdate : {
        type : String,
        required : false
    },

    Startdate :{
        type : String,
        required : true
    },

    State : {
        type : String,
        required : true
    },
    
    Location : {
        type : String,
        required : true
    },

    Stipend : {
        type : Number,
        required : true
    },

    Duration : {
        type : Number,
        required : true
    },

    skills : {
        type : [String],
        required : false
    },

    Employer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },

    Applicants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],

    Descriptions : {
        type :String,
        required : false,
    },
});


module.exports =  mongoose.model('Internship',InternshipSchema);

