var port = 8000;

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(port);

io.on('connection', function (socket) {
    console.log('connection', socket.id);

    socket.on('deviceorientation', function (data) {
        io.emit('modelorientation', data);
    });

    socket.on('disconnect', function () {
        console.log('disconnect', socket.id);
    });
});

app.use(express.static('site'));
