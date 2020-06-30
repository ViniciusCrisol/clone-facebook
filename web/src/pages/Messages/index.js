import React, { useState, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';
import socketio from 'socket.io-client';

import { Container } from './styles';

import { useAuth } from '../../Hooks/AuthContext';

function Messages() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);

  const socket = socketio('http://localhost:3131', {
    query: { user_id: user.id },
  });

  socket.on('recivedMessage', (message) => {
    addMessage(message);
  });

  const sendMessage = useCallback(
    (data) => {
      const message = {
        user: user.id,
        author: user.name,
        message: data.message,
      };

      socket.emit('sendMessage', message);
      setMessages((oldMessages) => [...oldMessages, message]);
    },
    [socket, user.id, user.name]
  );

  function addMessage(message) {
    setMessages(message);
  }

  return (
    <Container>
      <main>
        {messages.map((message) => (
          <div
            className={message.user === user.id ? 'myMessage' : ''}
            key={Math.random()}
          >
            <p>
              <strong>{message.author}: </strong>
              {message.message}
            </p>
          </div>
        ))}
      </main>

      <Form onSubmit={sendMessage}>
        <Input name='message' autoComplete='off' />
        <button type='submit'>send</button>
      </Form>
    </Container>
  );
}

export default Messages;
