import React from 'react';

import { Container } from './styles';

function HeaderFeed() {
  return (
    <Container>
      <li className='active'>
        <button>Posts</button>
      </li>
      <li>
        <button>Photos</button>
      </li>
      <li>
        <button>Communities</button>
      </li>
    </Container>
  );
}

export default HeaderFeed;
