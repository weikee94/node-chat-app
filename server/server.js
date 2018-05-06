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

    // not a listener not going provide callback function

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
        // emit to every connection
        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        })
    });

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