import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import {
  FiBookOpen,
  FiMessageSquare,
  FiUser,
  FiUsers,
  FiPaperclip,
} from 'react-icons/fi';

import { useAuth } from '../../Hooks/AuthContext';

import { Container, MenuContainer } from './styles';

function Menu() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <MenuContainer>
        <div>
          <NavLink exact to='/feed'>
            Feed
          </NavLink>

          <NavLink to='/friends'>Friends</NavLink>
          <NavLink to='/messages'>Messages</NavLink>

          <NavLink to='/profile'>Profile</NavLink>
        </div>

        <section>
          <GrFacebookOption color='white' size={35} />
        </section>

        <ul>
          <div>
            <h4>Menu</h4>
            {user && (
              <button onClick={signOut}>
                <BsBoxArrowLeft size={20} />
                Sign Out
              </button>
            )}
          </div>
          <li>
            <NavLink to='/profile'>
              <FiPaperclip size={15} /> Profile
              <span>{user && <>({user.name.split(' ')[0]})</>}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/feed'>
              <FiBookOpen size={15} /> Feed
            </NavLink>
          </li>
          <li>
            <NavLink to='/messages'>
              <FiMessageSquare size={15} /> Messages
            </NavLink>
          </li>
          <li>
            <NavLink to='/friends'>
              <FiUser size={15} /> Friends
            </NavLink>
          </li>
        </ul>
      </MenuContainer>
    </Container>
  );
}

export default Menu;
