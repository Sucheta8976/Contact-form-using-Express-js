const express = require('express');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const app= express();
const path = require("path");


dotenv.config({path: 'config.env'})
const port = process.env.PORT ;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/contact',urlencodedParser, function(req,res){
    res.render('complete',{data: req.body});
})


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
