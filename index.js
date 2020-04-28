'use strict'
const express = require('express');
const bodyParser = require('body-parser');
let exphbs = require('express-handlebars');

const data = require('./data.js');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log(data.getAll());
    res.render('home', {albums: JSON.stringify(data.getAll())});
});

app.get('/detail', (req,res) => {
    let result = data.getAll()[req.query.title];
    res.render('details', {title: req.query.title, result: result });
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About page');
});

app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Page not found');
});

app.listen( app.get('port'), () => {
    console.log('express started')
});