import React, { useEffect } from 'react';
import socketio from 'socket.io-client';

import { Container } from './styles';

import { useAuth } from '../../Hooks/AuthContext';

function Messages() {
  const { user } = useAuth();

  useEffect(() => {
    const socket = socketio('http://localhost:3131', {
      query: { user_id: user.id },
    });

    socket.on('booking_response', (booking) => {
      console.log(booking);
    });
  }, [user.id]);

  return <Container>Chat</Container>;
}

export default Messages;
