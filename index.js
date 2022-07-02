const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ejsmate=require('ejs-mate');
const dotenv = require('dotenv');
const cors = require('cors');


const registerRoute = require('./routes/registerroute');
const loginRoute = require('./routes/loginroute');
const path=require('path');


require("dotenv/config");


const app=express();

app.use(bodyParser.json({limit: "30mb",extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended : true}));
app.use('/register',registerRoute);
app.use('/login',loginRoute);

app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




const PORT = process.env.PORT;


app.get('/',(req,res)=>{
    res.render("login");
})
app.get('/jobs',(req,res)=>{
    res.render('jobs')
})
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser : true, useUnifiedTOpology : true})
.then(() => app.listen(PORT,() => {console.log(`server is running on : ${PORT}`)}) )
.catch((err)=>{console.log(err.message)} );

