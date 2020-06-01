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

app.use('/api', require('cors')());

app.get('/', (req, res) => {
    Album.find().lean()
    .then((result) => {
        res.render('home_react', { items: JSON.stringify(result) });
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

// Get all albums
app.get('/api/albums', (req,res) => {
    const albums = Album.find().lean()
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((err) => {
        next(err);
    });
});

// Add album
app.post('/api/albums', async (req, res) => {
    const album = new Album({
        Name: req.body.name,
        Artist: req.body.artist,
        ReleaseYear: req.body.releaseYear,
        Genre: req.body.genre,
        Length: req.body.length
    });
    await album.save();
    res.status(200).send(album);
});

// Get one album
app.get('/api/album/:index', (req,res) => {
    const albums = Album.find().lean()
    .then((result) => {
        res.status(200).send(result[req.params.index]);
    })
    .catch((err) => {
        next(err);
    });
});

// Update one album
app.post('/api/album/:id', (req, res) => {
    const album = find().lean()
    .then((result) => {
        album.Name = req.body.name;
        album.Artist = req.body.artist;
        album.ReleaseYear = req.body.releaseYear;
        album.Genre = req.body.genre;
        album.Length = req.body.length;
        
        album.save((err) => {
            if(err) next(err);
            else res.status.send(album);
        });
    })
    .catch((err) => {
        next(err);
    });
});

app.delete('/api/delete/album/:id', (req, res) => {
    const album = Album.deleteOne({ _id: req.params.id }, (err) => {
        if(err) next(err);
        else res.status(200).send("Successfully deleted album.");
    })
})

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