import React from 'react';

import { Container, Notification } from './styles';

function NotificatioModal({ notifications }) {
  return (
    <Container>
      <main>
        {notifications.map((notification) => (
          <Notification key={notification.id}>
            <p>{notification.message}</p>
          </Notification>
        ))}
      </main>
    </Container>
  );
}

export default NotificatioModal;
