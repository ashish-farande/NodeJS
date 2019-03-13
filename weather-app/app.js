const request = require('request');
const fs = require('fs');

const url = "https://api.darksky.net/forecast/814ce2bec1981c9002dcd36bc108ef91/37.8267,-122.4233"
request(url, (error, response) => {
	// console.log(toresponse);
	const data = JSON.parse.toString(response.body)
	fs.writeFileSync('web-data.json',data)
	console.log(data);
	// console.log(error);
})