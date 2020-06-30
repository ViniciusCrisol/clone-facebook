import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiEdit, FiBell } from 'react-icons/fi';
import { AiOutlineCamera } from 'react-icons/ai';

import { Container } from './styles';

import NotificationModal from '../NotificationModal';
import { useAuth } from '../../../Hooks/AuthContext';

import api from '../../../services/api';

function Header() {
  const { user, updateUser } = useAuth();

  const [editInput, setEditInput] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);

  async function handleSubmit(data) {
    try {
      const response = await api.put('update-user-data', data);
      updateUser(response.data);
    } catch (error) {
      toast(error.response.data.error);
    }
  }

  async function handleSubmitAvatar(image) {
    try {
      const data = new FormData();
      data.append('image', image);

      const response = await api.put('update-avatar', data);
      updateUser(response.data);
    } catch (error) {
      toast(error.response.data.error);
    }
  }

  useEffect(() => {
    async function getNotifications() {
      const response = await api.get('list-friend-request');
      setNotifications(response.data);
    }

    getNotifications();
  }, [notifications]);

  return (
    <Container>
      <div>
        <img src={user.avatar_url} alt={user.name} />
        <label>
          <input
            type='file'
            accept='image/*'
            name='avatar'
            onChange={(e) => handleSubmitAvatar(e.target.files[0])}
          />
          <AiOutlineCamera size={25} />
        </label>

        <main>
          <h1>{user.name}</h1>
          <Form onSubmit={handleSubmit} initialData={{ bio: user.bio }}>
            <Input
              className={editInput ? 'active' : ''}
              name='bio'
              multiline
              maxLength={255}
              disabled={editInput ? false : true}
            />

            <button
              onClick={() => setEditInput(!editInput)}
              type={!editInput ? 'submit' : 'button'}
            >
              <FiEdit size={30} color={editInput ? 'var(--light-blue)' : ''} />
            </button>

            <button onClick={() => setOpenNotifications(!openNotifications)}>
              <FiBell
                size={30}
                color={openNotifications ? 'var(--light-blue)' : ''}
              />
              <span>{notifications.length}</span>
            </button>

            {openNotifications && (
              <NotificationModal notifications={notifications} />
            )}
          </Form>
        </main>
      </div>
      <footer>
        <ul>
          <li>
            <NavLink exact to='/profile'>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile/information'>Information</NavLink>
          </li>
        </ul>
      </footer>
    </Container>
  );
}

export default Header;
