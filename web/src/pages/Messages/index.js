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

  const addMessage = useCallback((message) => {
    setMessages(message);
  }, []);

  function sendMessage(data) {
    const message = {
      author: user.name,
      message: data.message,
    };

    socket.emit('sendMessage', message);
  }

  return (
    <Container>
      <h1>messages</h1>
      <main>
        {messages.map((message) => (
          <div key={Math.random()}>
            <strong>{message.author}: </strong>
            {message.message}
          </div>
        ))}
        amor
      </main>

      <Form onSubmit={sendMessage}>
        <Input name='message' />
        <button type='submit'>Enviar</button>
      </Form>
    </Container>
  );
}

export default Messages;
