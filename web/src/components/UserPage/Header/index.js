import React from 'react';

import { Container } from './styles';

function Header({ avatar_url, name, bio }) {
  return (
    <Container>
      <img src={avatar_url} alt={name} />

      <main>
        <h1>{name}</h1>
        <p>{bio}</p>
      </main>
    </Container>
  );
}

export default Header;
