const request = require('request');
const geocode = require('./utils/geocode');
const getTemp = require('./utils/getLocationData');


const addr = process.argv[2];

if(!addr)
	console.log('Please, provide an address.');
else
{
	geocode(addr, (error, data) => {
	if (error)
		console.log('ERROR: ' + error);
	else
	{
		console.log( data);	
		getTemp(data.latitude, data.longitude, (error, tempData)=>{
			if (error)
				console.log('ERROR: ' + error)
			else
				console.log(tempData);
		});
	}
		
})
}
