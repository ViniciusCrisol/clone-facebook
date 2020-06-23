import React from 'react';
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';

import { Container, Notification } from './styles';

function NotificatioModal({ notifications }) {
  return (
    <Container>
      {notifications.length > 0 ? (
        <main>
          {notifications.map((notification) => (
            <Notification key={notification.id}>
              <p>{notification.message}</p>
              <footer>
                <button>
                  <AiOutlineCheck size={20} />
                </button>
                <button>
                  <AiOutlineDelete size={20} />
                </button>
              </footer>
            </Notification>
          ))}
        </main>
      ) : (
        <>
          <h1>
            nothing here <br /> =(
          </h1>
        </>
      )}
    </Container>
  );
}

export default NotificatioModal;
