// listen for the server
var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// on first parameter is the event name u create
// new message event
// emid by server listened to on client
socket.on('newMessage', function (message) {
    console.log(message);
});