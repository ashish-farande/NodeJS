const request = require('request');


const getLocation = (addr, callback) => {
	var data;
	const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + addr + '.json?access_token=pk.eyJ1IjoiYXNoaXNoLWZhcmFuZGUiLCJhIjoiY2p0OGNhczhtMDdhcDN5bzM1OXk0N2YwbyJ9.ADv58xkM-UQagoQTk3cNhA&limit=1';
	
	request({ url: geocodeURL, json: true }, (error, response) => {
		if (error) {
			console.log('Unable to connect to the server.');
			console.log('Error: ' + error);
			callback(error, undefined);

		}
		else if (response.body.features.length === 0) {
			error_1 = 'Unable to find location';
			callback(error_1, undefined);
		}
		else {

			callback(undefined, {
				latitude: response.body.features[0].center[1],
				longitude: response.body.features[0].center[0],
				location: response.body.features[0].place_name
			})
			// console.log("latitude: " + data.latitude + " longitude: "+ data.longitude + " nd  location is " + data.location);
		}
	});
}

module.exports = getLocation
