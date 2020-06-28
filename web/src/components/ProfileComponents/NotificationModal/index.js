import React from 'react';
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';

import api from '../../../services/api';

import { Container, Notification } from './styles';

function NotificatioModal({ notifications }) {
  async function handleSubmit({ response, id }) {
    api.put(`response-request/${id}/${response}`);
  }

  return (
    <Container>
      {notifications.length > 0 ? (
        <main>
          {notifications.map((notification) => (
            <Notification key={notification.id}>
              <p>{notification.message}</p>
              <footer>
                <button
                  onClick={() =>
                    handleSubmit({ response: 'accepted', id: notification.id })
                  }
                >
                  <AiOutlineCheck size={20} />
                </button>
                <button
                  onClick={() =>
                    handleSubmit({ response: 'declined', id: notification.id })
                  }
                >
                  <AiOutlineDelete size={20} />
                </button>
              </footer>
            </Notification>
          ))}
        </main>
      ) : (
        <>
          <h2>All clean !</h2>
        </>
      )}
    </Container>
  );
}

export default NotificatioModal;
