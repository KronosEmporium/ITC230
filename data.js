const albums = [
    
    {   
        "Name" : "Wish You Were Here",
        "Artist" : "Pink Floyd",
        "ReleaseYear" : "1975",
        "Genre" : "Progressive Rock",
        "Length" : "44:17"    
    },
    {
        "Name" : "London Calling",
        "Artist" : "The Clash",
        "ReleaseYear" : "1979",
        "Genre" : "Post-Punk",
        "Length" : "65:07"
    },
    {
        "Name" : "Revolver",
        "Artist" : "The Beatles",
        "ReleaseYear" : "1966",
        "Genre" : "Rock",
        "Length" : "35:01"
    },
    {
        "Name" : "City Club",
        "Artist" : "The Growlers",
        "ReleaseYear" : "2016",
        "Genre" : "Garage Rock",
        "Length" : "49:36"
    },
    {
        "Name" : "DAMN",
        "Artist" : "Kendrick Lamar",
        "ReleaseYear" : "2017",
        "Genre" : "Conscious Hip Hop",
        "Length" : "54:54"
    }
    
];

module.exports = {
    
    getAll: function () {
        
        return albums;
    },
    
    getItem: function (n) {
        if (albums[n]) {
            return albums[n];
            console.log("successfully found item at index ${n}");
        } else {
            console.log("no item at index ${n}");
        }
    },
    
    addItem: function (item) {
        if (typeof item === "object") {
            albums.push(item);
            console.log("successfully added item");
        } else {
            return "Item Not Object";
            console.log("failed to add item");
        }
    },
    
    deleteItem: function (n) {
        if (albums[n]) {
            albums.splice(n, 1);
            console.log("deleted item at index ${n}");
            return "successfully deleted";
        } else {
            return "failed to delete";
            console.log("failed to delete item at index ${n}");
        }
    }
};