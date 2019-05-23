const request = require('request');



const getTemp = (latitude, longitude, callback)=>{
	const weatherURL = 'https://api.darksky.net/forecast/814ce2bec1981c9002dcd36bc108ef91/' + latitude + ',' + longitude
	// console.log('weatherURL: ' + weatherURL);
	request({url: weatherURL, json: true}, (error, response) => {
		if(error)
		{
			callback(error, 'Undefined');
			// console.log('Unable to connect to the server.');
			// console.log('Error: ' + error);
		}else if(response.body.error)
		{
			error = response.body.error
			callback(error, 'Undefined');

			// console.log('The given location is invalid.');
		}
		else{
			currently=response.body.currently
			// console.log("The temperature is " + currently.temperature + ". And the chance of rain is " + currently.precipProbability + ".");	
			const summary = response.body.hourly.summary + " The temperature is " + currently.temperature + "F. The chance of rain is " + currently.precipProbability*100 + "%.";
			callback(error, summary);
		}

		
	});
}

module.exports = getTemp