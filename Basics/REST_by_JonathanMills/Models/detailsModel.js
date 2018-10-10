var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var detailsModel = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    job: {
        type: String
    },
});

module.exports = mongoose.model("Details", detailsModel);