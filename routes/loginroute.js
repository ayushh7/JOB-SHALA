const express=require('express');
const app=express();
const passport=require('passport');
const login=require('../controller/auth.js');
const flash = require('connect-flash');

const router=express.Router();

router.get('/login',(req,res)=>{
    res.render('users/login');
});

router.post('/login',passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),login.login)
router.post('/register',login.register);


module.exports=router;


