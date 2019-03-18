const express = require('express');
const path = require('path');

const app = express();
const pathToPublic = path.join(__dirname, '../public');

app.use(express.static(pathToPublic));

// app.get('', (req, res)=>{
//     res.send('<h1>Weather!</h1>');
// })

// app.get('/help', (req, res)=>{
//     res.send({
//         name: 'Ashish',
//         position: 'CEO'
//     });
// })

// app.get('/about', (req, res)=>{
//     res.send('<h1>About!</h1>');
// })

app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'Today\'s weather',
        location: 'Banglore'
    });
})

app.listen(3000, '127.0.0.1', ()=>{
    console.log('Server is up and running.');
});