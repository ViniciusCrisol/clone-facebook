import React from 'react';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <li className='active'>
        <button>Posts</button>
      </li>
    </Container>
  );
}

export default Header;
