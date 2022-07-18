const mongoose = require('mongoose');
const User = require('./User.js');


const jobSchema = mongoose.Schema({

    Name : {
        type : String,
        required : true,
        max : 255
    },

    Descriptions : {
        type :String,
        required : false,
    },

    Company : {
        type : String,
        required: true,
        min: 6,
        max : 255
    },
   
    Lastdate : {
        type : Date,
        required : false
    },
    
    perks : {
        type : [String],
        required : true
    },

    CTC : {
        type : Number,
        required : true
    },
    
    Category : {
        type : String,
        required : true
    },

    Employer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }

    
});



module.exports =  mongoose.model('Job',jobSchema);

