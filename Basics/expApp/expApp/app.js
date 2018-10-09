var express = require('express');
const fs= require('fs');

var app = express();
var port = process.env.port || 8080;
/* Using app.get()
//normal string
app.get('/',function(req,res){
    res.send("Welcome   mr  KAVIchelvan");
});

//inbuilt json
app.get('/json',function(req,res){
    var authJson = {
        name: 'kavi',
        age:40,
        work: 'employee'
    };
    res.json(authJson);
})

//json file method 1
app.get('/json1',function(req,res){
    var obj;
 fs.readFile('example_1.json',(err,data) =>{
     if(err)
        console.log(err.message);
    obj=JSON.parse(data)
    res.json(obj);
 });
});

//json file method 1 example 2
app.get('/json2',function(req,res){
    var obj;
 fs.readFile('example_2.json',function (err,data) {
     if(err)
        console.log(err.message);
    obj=JSON.parse(data)
    res.json(obj);
 });
});

//json file method 2 example 1
app.get('/json3',function(req,res){
    var obj = require('./example_1.json');
    var data = obj.fruit+' and it is '+obj.size;
    res.send(data);
   console.log(obj.fruit+' '+obj.size);
});

//json file method 2 example 2
app.get('/json4',function(req,res){
    var obj = require('./example_2.json');
    
    var data = obj.quiz.sport.q1.question+' and it options are '+obj.quiz.sport.q1.options;
    var ans = obj.quiz.sport.q1.answer;  
   
    res.send(data+'</br>'+ans);
    //res.send(data);
    
   console.log(obj.quiz.sport.q1.question+' '+obj.quiz.sport.q1.answer);
});

//html file
app.get('/html',function(req,res) {
    fs.readFile('index.html',function (err,data) {
        if(err)
           console.log(err.message);
       res.write(data);
    }); 
});

//xml file
app.get('/xml',function(req,res) {
    fs.readFile('data.xml', function(err,data) {
        if(err)
            console.log(err.message);
        res.write(data);
    })
})

*/

//using Router
var  router = express.Router();

router.route('/').get(function(req,res) {
    res.send("Welcome   mr  KAVIchelvan"); 
});

router.route('/json').get(function(req,res){
    var authJson = {
        name: 'kavi',
        age:40,
        work: 'employee'
    };
    res.json(authJson);
});

router.route('/html').get(function(req,res) {
    fs.readFile('index.html',function (err,data) {
        if(err)
           console.log(err.message);
       res.write(data);
    }); 
});
app.use('/',router);

app.listen(port);