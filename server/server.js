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
    socket.emit('newEmail', {
        from: 'Wei@exmaple.com',
        text: 'How ur going',
        createdAt: 123
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
    });

    socket.emit('newMessage', {
        from: 'Kee@example.com',
        text: 'msg from kee',
        createdAt: 345
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