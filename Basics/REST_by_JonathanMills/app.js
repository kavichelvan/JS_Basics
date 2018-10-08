var express = require('express');


var app=express();
var port = process.env.port || 8080;

//creating a router
var bookRouter =express.Router();
//router 1
bookRouter.route('/Books').get(function(req,res){
    var responseJson = {
        hello: "This is my api"
    };
    res.json(responseJson);
});

//router 2
bookRouter.route('/Authors').get(function(req,res){
    res.send("Authors name");
});

app.use('/api',bookRouter);


//default router
app.get('/',function(req,res){
    res.send('Welcome to my API with gulp 3');
});

app.listen(port,function(){
    console.log("Gulp is Running on port number : "+port);
});
