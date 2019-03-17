const https = require('https');

const weatherURL = 'https://api.darksky.net/forecast/814ce2bec1981c9002dcd36bc108ef91/23,120'

const request = https.request(weatherURL, (response) =>{
	var data = '';
	response.on('data', (chunk)=>{
		data = data + chunk.toString();
	})

	response.on('end', ()=>{
		console.log(JSON.parse(data));
	})
})

request.end();