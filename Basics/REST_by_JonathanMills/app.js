var express = require('express'),
    mongoose = require('mongoose');

//var db=mongoose.connect('mongodb://localhost/bookAPI');
var book = require('./models/bookModel');

var app=express();
var port = process.env.port || 8080;

//creating a router
var bookRouter =express.Router();
//router 1
bookRouter.route('/Books').get(function(req,res){
   Book.find(function(err,books){
        if(err)
            console.lo(err);
        else
            res.json(books);
   })
    
});

//router 2

const fs = require('fs');
fs.readFile('page.html',(err,html)=> {
    if(err){
        throw err;
    }
    bookRouter.route('/Authors').get(function(req,res){
    var authJson = {
        name: 'kavi',
        age:40,
        work: 'employee'
    };
   // res.send("Authors name");
    //res.json(authJson);
    res.write(html);
});

app.use('/api',bookRouter);

//default router
app.get('/',function(req,res){
    res.send('Welcome to my API with gulp 3');
});

app.listen(port,function(){
    console.log("Gulp is Running on port number : "+port);
});

});
