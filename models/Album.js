const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Artist: String,
    ReleaseYear: String,
    Genre: String,
    Length: String
});

module.exports = mongoose.model('Album', AlbumSchema);