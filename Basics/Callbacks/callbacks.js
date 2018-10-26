const fs = require('fs');
const debug = require('debug');

const fileName = `input.txt`;
fs.stat(fileName,(err,status) =>{
    if(err){
       // return console.error(err.stack);
        return console.log('not found');
    }
    else {
        console.log(status);
        console.log(`Got file successfully ${fileName}`);
    }
})

//Callbacks simple

const checkFileType = function (arg, callback){
    if(typeof arg!== 'number'){
        return callback(null,'Not a number');
    }
    callback(null,"Yes it is anumber");
}

checkFileType(`hj`,(err,data) =>{
    if(err) {
        debug(err);
        console.error(err.stack);
    }
    else    
        console.log(data);
})
