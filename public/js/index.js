// listen for the server
var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createEmail', {
        to: 'jen@exmaple.com',
        text: 'This is wei'
    });

    // emit by client listen by server
    socket.emit('createMessage', {
        text: 'Kee Msg'
    })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// on first parameter is the event name u created
socket.on('newEmail', function (email) {
    console.log(email);
});

// new message event
// emid by server listened to on client
socket.on('newMessage', function (message) {
    console.log(message);
});