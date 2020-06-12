import React, { useEffect, useState } from 'react';
import querystring from 'query-string';
import io from 'socket.io-client';

import InforBar from './InforBar';
import Input from './Input';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

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
  }, [location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    return e.key === 'Enter' ? sendMessage(e) : null;
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  console.log(message, messages);

  return (
    <div className='outerContainer'>
      <div className='container'>
        <Input
          message={message}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
        />
        <InforBar room={room} />
      </div>
    </div>
  );
};

export default Chat;
