console.log("Running");


var validator = require("email-validator");
 

/*
if((validator.validate(value)) || ((value.startsWith("N") || value.startsWith("A") 
        || value.startsWith("n") || value.startsWith("a")) && value.length == 7)) {
    console.log("Valid");
}
else {
    console.log("Invalid");
}
*/
var key = "kvi@gmail.co";
var idFormat = /^[AaNn][0-9]{6}$/;
var emailFormat = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[.]{1}[a-zA-Z]+$/;
var emailFormatNew = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+[@]{1}[a-zA-Z]+[.]{1}[a-zA-Z]+$/g;
//if(key.match(idFormat) || validator.validate(key)){
if(key.match(idFormat) || key.match(emailFormatNew)){
    console.log("valid ID all");
}
else {
    console.log("Invalid ID all");
}


/*
var inputText = "kavi@a.com";
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log("running");
    if(inputText.match(mailformat))
    {
        console.log('Valid email');
    }
    else
    {
        console.log('Invalid email');
    }

*/

