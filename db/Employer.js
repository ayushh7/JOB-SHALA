const mongoose = require('mongoose');


const EmployerSchema = mongoose.Schema({
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
    email : {
        type : String,
        required: true,
        min: 6,
        max : 255
    },
    password : {
        type : String,
        required : true,
        min : 6,
        max : 1024
    },
    Company :{
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now
    }
});


module.exports =  mongoose.model('Employer',EmployerSchema);

