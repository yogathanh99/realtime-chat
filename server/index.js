import express from 'express';
import cors from 'cors';
import socketio from 'socket.io';
import http from 'http';

import { addUser, removeUser, getUser, getUserInRoom } from './users';
import route from './route';

const app = express();
app.use(cors());
app.use(route);

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('We have a new connection!!');
  socket.on('join', ({ name, room }, next) => {
    const { user, error } = addUser({ id: socket.id, name, room });

    // We use callback to handle error
    if (error) next(error);

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to room ${user.room}.`,
    });

    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name} has joined!!` });

    socket.join(user.room);
    next();
  });

  socket.on('sendMessage', (message, next) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    next();
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
