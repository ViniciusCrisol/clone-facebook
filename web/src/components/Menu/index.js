import React from 'react';
import { GrFacebook } from 'react-icons/gr';
import { FiBookOpen, FiMessageSquare, FiUser, FiUsers } from 'react-icons/fi';

import { Container, Content } from './styles';

function Menu() {
  return (
    <Container>
      <Content>
        <GrFacebook color='#3C5A99' size={50} />

        <ul>
          <h4>Menu</h4>

          <li>
            <a href=''>
              <FiBookOpen size={15} /> News
            </a>
          </li>
          <li>
            <a href=''>
              <FiMessageSquare size={15} /> Messages
            </a>
          </li>
          <li>
            <a href=''>
              <FiUser size={15} /> Friends
            </a>
          </li>
          <li>
            <a href=''>
              <FiUsers size={15} /> Communities
            </a>
          </li>
        </ul>
      </Content>
    </Container>
  );
}

export default Menu;
