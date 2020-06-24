import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiEdit, FiBell } from 'react-icons/fi';

import api from '../../../services/api';
import Modal from '../NotificatioModal';
import { useAuth } from '../../../Hooks/AuthContext';

import { Container } from './styles';

function Header() {
  const { user, updateUser } = useAuth();

  const [editInput, setEditInput] = useState(false);
  const [modal, setModal] = useState(false);
  const [notifications, setNotifications] = useState([]);

  async function handleSubmit(data) {
    try {
      const response = await api.put('update-user-data', data);
      updateUser(response.data);
    } catch (error) {
      toast(error.response.data.error);
    }
  }

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('list-friend-request');
      setNotifications(response.data);
    }

    loadNotifications();
  }, []);

  return (
    <Container>
      <img src={user.avatar_url} alt={user.name} />

      <div>
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
              <FiEdit size={30} color={editInput ? '#5085e8' : ''} />
            </button>
            <button onClick={() => setModal(!modal)}>
              <FiBell size={30} color={modal ? '#5085e8' : ''} />
              <span>{notifications.length}</span>
            </button>
            {modal && <Modal notifications={notifications} />}
          </Form>
        </main>
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
            <li>
              <NavLink to='/profile/photos'>Photos</NavLink>
            </li>
            <li>
              <NavLink to='/profile/communities'>Communities</NavLink>
            </li>
          </ul>
        </footer>
      </div>
    </Container>
  );
}

export default Header;
