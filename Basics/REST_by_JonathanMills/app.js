var express = require('express');


var app=express();
var port = process.env.port || 8080;

app.get('/',function(req,res){
    res.send('Welcome to my API with gulp 3');
});

app.listen(port,function(){
    console.log("Gulp is Running on port number : "+port);
});
