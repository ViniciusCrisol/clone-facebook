import express from 'express';
import cors from 'cors';
import path from 'path';
import socketio from 'socket.io';

import routes from './routes';

const app = express();
const io = socketio(3131);

const connectedUsers: any = {};
const messages: any = [];

io.on('connection', (socket) => {
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;

  socket.on('sendMessage', (data) => {
    messages.push(data);
    socket.broadcast.emit('recivedMessage', messages);
  });
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(3333);
