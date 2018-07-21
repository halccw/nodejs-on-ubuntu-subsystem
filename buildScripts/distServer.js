import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

// All webpack codes are removed as we won't interact with webpack server, but a prod server instead
/* eslint-disable no-console */

var port = 3000;
var app = express();

// Enable gzip compression
app.use(compression());

// Let express serve static files in the dist directory
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
    // Pretend this is a real database
    res.json([
        {"id": 1, "firstName": "Bob"},
        {"id": 2, "firstName": "Jack"},
        {"id": 3, "firstName": "Celine"},
    ]);
});

app.listen(port, function(err){
    if (err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
