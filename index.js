const http = require("http");
const fs = require("fs");

const data = require("./data.js");

http.createServer((req,res) => {
    
    const path = req.url.toLowerCase();
    
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home Page\nThis is the home page.\nThe array of albums in data.js contains ' + data.getAll().length + ' items.');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About Page\n\nThis is a page about Crosby. Crosby is a student at Seattle Central College. Crosby likes playing and listening to music.');
            break;
        default:
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('404 Page Not Found\n\nThe page you requested is unavailable.');
            break;
    }
}).listen(process.env.PORT || 3000);