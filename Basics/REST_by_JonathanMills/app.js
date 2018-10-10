var express = require('express'),
    mongoose = require('mongoose');

var db=mongoose.connect('mongodb://localhost:27017/demo');
var Book = require('./models/bookModel');
var Details = require("./models/detailsModel");

var app=express();
var port = process.env.port || 8080;

//creating a router
var bookRouter =express.Router();
//router 1
bookRouter.route('/Books').get(function(req,res){
   Book.find(function(err,books){
        if(err)
            console.log(err);
        else
            res.json(books);
   })
   //res.json(responseJson);
    
});

//router 2
bookRouter.route('/Details').get(function(req,res){
    Details.find(function(err,details){
         if(err)
             console.log(err);
         else
            res.json(details.name);

    })
    //res.json(responseJson);
     
 });
app.use('/',bookRouter);

//router 3
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



//default router
app.get('/',function(req,res){
    res.send('Welcome to my API with gulp 3');
});

app.listen(port,function(){
    console.log("Gulp is Running on port number : "+port);
});

});
