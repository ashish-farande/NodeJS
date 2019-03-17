setTimeout(()=>{
	console.log('The 2sec are done.');
}, 2000)




const geocode = (addr, callback) =>{
	setTimeout(()=>{
		const data ={
			lat: 0, 
			long: 0
		}

		callback(data);
	}, 2000)
}

const addr = 'place';
geocode(addr, (data)=>{
	console.log(data);
})