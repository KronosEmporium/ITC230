const albums = [
    
    {   
        "Name" : "Wish You Were Here",
        "Artist" : "Pink Floyd",
        "Release Year" : "1975",
        "Genre" : "Progressive Rock",
        "Length" : "44:17"    
    },
    {
        "Name" : "London Calling",
        "Artist" : "The Clash",
        "Release Year" : "1979",
        "Genre" : "Post-Punk",
        "Length" : "65:07"
    },
    {
        "Name" : "Revolver",
        "Artist" : "The Beatles",
        "Release Year" : "1966",
        "Genre" : "Rock",
        "Length" : "35:01"
    },
    {
        "Name" : "City Club",
        "Artist" : "The Growlers",
        "Release Year" : "2016",
        "Genre" : "Garage Rock",
        "Length" : "49:36"
    },
    {
        "Name" : "DAMN",
        "Artist" : "Kendrick Lamar",
        "Release Year" : "2017",
        "Genre" : "Conscious Hip Hop",
        "Length" : "54:54"
    }
    
];

module.exports = {
    
    getAll: function () {
        
        return albums;
    }
};