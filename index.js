'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const Album = require('./models/Album');

const connectionString = "mongodb+srv://user1:P\@ssw0rd1@albums-szcts.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('open', ()=> {
    console.log("Database connected");
});

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    Album.find().lean()
    .then((result) => {
        res.render('home', { albums: result });
    })
    .catch((err) => {
        next(err);
    });
});

app.get('/detail/:album', (req,res) => {
    Album.findOne({ Name: req.params.album }).lean()
    .then((result) => {
        res.render('detail', { result: result });
    })
    .catch((err) => {
        next(err);
    });
});

app.get('/delete/:album', (req,res) => {
    Album.findOne({ Name: req.params.album }).lean()
    .then((result) => {
        Album.deleteOne({ Name: req.params.album }).lean()
        .then((result) => {
            res.render('delete', { Name: req.params.album });
        })
        .catch((err) => {
            next(err);
        });
    })
    .catch((err) => {
        next(err);
    });
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
    console.log('express started, listening on port ' + app.get('port'));
});