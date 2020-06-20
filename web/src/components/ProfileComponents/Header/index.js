import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { NavLink } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import { useAuth } from '../../../Hooks/AuthContext';

import { Container } from './styles';

function Header() {
  const { user } = useAuth();

  const [editInput, setEditInput] = useState(true);

  async function handleSubmit() {}

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
            <button onClick={() => setEditInput(!editInput)}>
              <FiEdit size={30} color={editInput ? '#5085e8' : ''} />
            </button>
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
