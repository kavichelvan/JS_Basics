var request = require('request');

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
