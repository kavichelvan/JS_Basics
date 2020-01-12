var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db=mongoose.connect('mongodb://localhost:27017/demo');
var Details = require("./models/detailsModel");

var app=express();
var port = process.env.port || 8080;

//creating a router
var bookRouter =express.Router();

/*
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
*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//router 2
bookRouter.route('/Details')
.post(function(req,res){
    var detail = new Details(req.body);
     console.log(detail);
     res.send(detail);
})
.get(function(req,res){
    Details.find(function(err,details){
         if(err)
             //console.log(err);
             res.status(500).send(err);
         else
            res.json(details);
    })
 });

 //router 3
 bookRouter.route('/Details/:detailsId').get(function(req,res){
    Details.findById(req.params.detailsId, function(err,detail){
         if(err)
             //console.log(err);
             res.status(500).send(err);
         else
            res.json(detail);
    })
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
