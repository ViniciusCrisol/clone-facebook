import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../../Hooks/AuthContext';

import { Container } from './styles';

function Header() {
  const { user } = useAuth();

  return (
    <Container>
      <img src={user.avatar_url} alt={user.name} />

      <div>
        <main>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
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
