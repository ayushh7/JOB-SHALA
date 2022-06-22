
const express = require('express');
const User = require('../db/User');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

const router = express.Router();
const schema = Joi.object({
    email : Joi.string().min(6).required().email(),
    password : Joi.string().min(6).required()
});


router.post("/",async (req,res)=>{
    const {error} =   schema.validate(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }

    const  user = await  User.findOne({email: req.body.email});
    if(!user)
    {
        return res.status(400).send('Email or Password is wrong !!!'); 
    }
    
    const passValid = await bcrypt.compare(req.body.password,user.password);
    if(!passValid)
     return res.status(400).send("Invalid Password !!!");


     res.send("logged in !!!");

    
});

module.exports = router;