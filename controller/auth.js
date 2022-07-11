const flash = require('connect-flash');
const express = require('express');
const User = require('../db/User');
const localStrat = require('passport-local');
const bcrypt = require('bcrypt');
const passport = require('passport');


require('dotenv').config();

module.exports.login=(req, res, next) => {

    const curUser=req.user;
    if (req.session.returnTo) {
        res.redirect(req.session.returnTo);
        return;
    }
    req.flash('success', 'Welcome Back!');
    res.redirect('/');
}


module.exports.register=async (req, res, next) => {
    try {
        console.log(req.body);
        const user=new User(
            {
                email: req.body.email,
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
            }
        );
       
       const regUser=await User.register(user, req.body.password);
       console.log(regUser);

        req.logIn(regUser, (err) => {
            if (err) {
                console.log(err);
                req.flash('error', err.message);
                res.redirect('/login');
            }
        });
        req.flash('success', 'Successfully Registered!');
        if (req.session.returnTo) {
            res.redirect(req.session.returnTo);
            return;
        }
        const curUser=regUser;
        res.redirect('/');
    }
    catch (err) {
        console.log(err);
        req.flash('error', err.message);
        res.redirect('/login');
    }
}

