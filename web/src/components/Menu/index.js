import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import {
  FiBookOpen,
  FiMessageSquare,
  FiUser,
  FiUsers,
  FiPaperclip,
} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Hooks/AuthContext';

import { Container, Content } from './styles';

function Menu() {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <section>
          <GrFacebookOption color='white' size={35} />
        </section>

        <ul>
          <h4>Menu</h4>

          <li>
            <NavLink exact to='/profile'>
              <FiPaperclip size={15} /> Profile
              <span>{user && <>({user.split(' ')[0]})</>}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/feed'>
              <FiBookOpen size={15} /> News
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
          <li>
            <NavLink to='/communities'>
              <FiUsers size={15} /> Communities
            </NavLink>
          </li>
        </ul>
      </Content>
    </Container>
  );
}

export default Menu;
