var request = require('request');

//https://medium.com/@tkssharma/writing-neat-asynchronous-node-js-code-with-promises-async-await-fa8d8b0bcd7c

var userDetails;
function initialize() {
	// Setting URL and headers for request
	var options = {
		url: 'https://api.github.com/users/tkssharma',
		headers: {
			'User-Agent': 'request'
		}
	};
	// Return new promise
	return new Promise(function(resolve, reject) {
		// Do async job
		request.get(options, function(err, resp, body) {
			if (err) {
                //reject(err);
                console.log(err);
			} else {
				resolve(JSON.parse(body));
			}
		});
	});
}

initialize().then(function(data) {
	console.log(data);
});
