import React, { useEffect, useState } from 'react';
import querystring from 'query-string';
import io from 'socket.io-client';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  let socket;
  useEffect(() => {
    const { name, room } = querystring.parse(location.search);

    setName(name);
    setRoom(room);

    socket = io(process.env.REACT_APP_SERVER_SOCKET);
    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [process.env.REACT_APP_SERVER_SOCKET, location.search]);
  return <div>This is Chat</div>;
};

export default Chat;
