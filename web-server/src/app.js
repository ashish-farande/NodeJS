const express = require('express');
const path = require('path');
const hbs = require('hbs');

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
//app.use(express.static(pathToPublic));

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather Broadcast',
        name: 'Ashish Farande',
        indexNote: 'Still under proces...'
    })
})

// app.get('/weather', (req, res)=>{
//     res.send({
//         forecast: 'Today\'s weather',
//         location: 'Banglore'
//     });
// })

app.get('/help',(req, res)=>{
    res.render('help',{
        title: 'Help',
        helpText: 'Here is some help'
    })
})


app.get('/about',(req, res)=>{
    res.render('about',{
        title: 'About',
        name: 'Ashish Farande'
    })
})

app.get('*', (req, res)=>{
    res.send('<h1>A 404 Page.</h1>')
})

app.listen(3000, '127.0.0.1', ()=>{
    console.log('Server is up and running.');
});