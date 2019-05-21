const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/getLocationData.js');

const app = express();

// Path to express and views
const pathToPublic = path.join(__dirname, '../public');
const pathToViews = path.join(__dirname, '../templates/views');
const pathToPartials = path.join(__dirname, '../templates/partials')

// Setuup handle bar engine
app.set('view engine', 'hbs');
app.set('views', pathToViews);
hbs.registerPartials(pathToPartials);

// Static directory
app.use(express.static(pathToPublic));

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather Broadcast',
        name: 'Ashish Farande',
        indexNote: 'Still under proces...'
    })
})

app.get('/help',(req, res)=>{
    res.render('help',{
        title: 'Help',
        helpText: 'Here is some help'
    })
})


app.get('/products',(req, res)=>{
    if(!req.query.search)
    {
        return res.send({
            error: "Please provide something to search."
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
});

app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        return res.send({
            error: "Please provide an address"
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}={}) => {
        if (error)
            return res.send( error);
        
        forecast(latitude, longitude, (error, tempData)=>{
            if (error)
                return res.send( error)
            res.send({
                forecast: tempData,
                location: location,
                address: req.query.address
            })
    });
        
    })
    
})

app.get('/about',(req, res)=>{
    res.render('about',{
        title: 'About',
        name: 'Ashish Farande'
    })
})

app.get('/help/*', (req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Ashish Farande',
        errorMessage: 'No help provided here.'
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'Ashish Farande',
        errorMessage: 'Page Not Found'
    })
})

app.listen(3000, '127.0.0.1', ()=>{
    console.log('Server is up and running.');
});