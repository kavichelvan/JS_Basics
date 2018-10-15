var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var bookModel = new Schema({
        bookName: { 
            type:String
        },bookAuthor: {
            type:String
        },unitSold: {
            type:Number
        }
    });

    module.exports = mongoose.model('Books', bookModel);