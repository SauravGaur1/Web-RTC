const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

app.use(express.static('public'));
app.use(cors(
  origin = "*",
))

io.on('connection', socket => {
    console.log('a user connected');

    socket.on('message', message => {
        socket.broadcast.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});
