// root of the project

// create new express app
// configure public directory
// app listen to start server

const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var express = require('express');
var app = express();

var server = http.createServer(app);


var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
    console.log('New User connected!');

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});


server.listen(port, () => {
    console.log(`Started on port ${port}`)
});

module.exports = {
    app: app
}