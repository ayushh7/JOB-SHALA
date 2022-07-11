const mongoose = require('mongoose');

const InternshipSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true,
        max : 255
    },

    Discriptions : {
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

    Stipend : {
        type : Number,
        required : true
    },
    
    Category : {
        type : String,
        required : true
    },

    Duration : {
        type : Number,
        required : true
    }
});


module.exports =  mongoose.model('Internship',InternshipSchema);

