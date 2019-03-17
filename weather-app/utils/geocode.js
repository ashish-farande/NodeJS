const request = require('request');


const getLocation = (addr, callback) =>{
	const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+addr+'.json?access_token=pk.eyJ1IjoiYXNoaXNoLWZhcmFuZGUiLCJhIjoiY2p0OGNhczhtMDdhcDN5bzM1OXk0N2YwbyJ9.ADv58xkM-UQagoQTk3cNhA&limit=1';
	// console.log('geocodeURL: ', geocodeURL);
	request({url: geocodeURL, json: true}, (error, response) =>{
		if(error)
		{
			console.log('Unable to connect to the server.');
			console.log('Error: ' + error);
		}
		else  if(response.body.features.length === 0){
			error = 'Unable to find location';
		}
		else
		{
			const data = {
				latitude: response.body.features[0].center[1],
				longitude: response.body.features[0].center[0],
				location: response.body.features[0].place_name
			}
			// console.log("latitude: " + data.latitude + " longitude: "+ data.longitude + " nd  location is " + data.location);
		}
		callback(error, data);
	});
}

module.exports = getLocation
