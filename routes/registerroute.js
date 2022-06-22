const express = require('express');
const User = require('../db/User');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const app = express();

const router = express.Router();

const schema = Joi.object({
    FirstName : Joi.string().required(),
    LastName : Joi.string().required(),
    email : Joi.string().min(6).required().email(),
    password : Joi.string().min(6).required()
});


router.post('/',async (req,res)=>{
    
    const {error} =   schema.validate(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }
    
    const emailprev = await  User.findOne({email: req.body.email});

    if(emailprev)
    {
        return res.status(400).send('email already exists'); 
    }
  
    const hashPassword = await bcrypt.hash(req.body.password,10);

    const user = new User({
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        email : req.body.email,
        password : hashPassword
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;

