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
    res.render('home', {albums: data.getAll()});
});

app.get('/detail', (req,res) => {
    let result = data.getAll()[req.query.item];
    res.render('detail', {title: data.getAll()[req.query.item].Name, result: result });
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