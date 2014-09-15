/* 
  *  Web server for Horizon MMO
  *  @: By Max & Kendell
*/

// Dependencies
var colors  = require("colors");
var express = require("express");
var http    = require("http");
var app     = express();
var io      = require('socket.io');
var bone    = require('bone.io');
bone.set('io.options', {
  server: io  
});

app.use(bone.static());

// Server client files from the server root
app.use('/', express.static("./client"));

// Start the server on port 1337
var server  = http.Server(app);
var sio     = io.listen(server);
var port    = 1337;
server.listen(port);

console.log( String("Server is running at http://localhost:" + port).red );