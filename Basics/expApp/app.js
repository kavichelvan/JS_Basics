var express = require('express');

var app = express();
var port = process.env.port || 8080;

app.get('/',function(req,res){
    res.send("Welcome");
});

app.listen(port);