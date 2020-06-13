import React from 'react';
import { GrFacebook } from 'react-icons/gr';
import { FiBookOpen, FiMessageSquare, FiUser, FiUsers } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import { Container, Content } from './styles';

function Menu() {
  return (
    <Container>
      <Content>
        <GrFacebook color='#3C5A99' size={50} />

        <ul>
          <h4>Menu</h4>

          <li>
            <NavLink exact to='/'>
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
