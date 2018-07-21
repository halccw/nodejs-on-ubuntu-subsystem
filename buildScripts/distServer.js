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

app.listen(port, function(err){
    if (err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
