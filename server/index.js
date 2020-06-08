import express from 'express';
import cors from 'cors';
import socketio from 'socket.io';
import http from 'http';
import route from './route';

const app = express();
app.use(cors());
app.use(route);

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
