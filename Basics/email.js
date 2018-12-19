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
var value = "n329635";
var idFormat = /^[AaNn][0-9]{6}$/;
if(value.match(idFormat) || validator.validate(value)){
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

