import React from 'react';

import { Container } from './styles';

function UserContainer({ name, location, avatar_url }) {
  return (
    <Container to='/'>
      <img src={avatar_url} alt={name} />
      <div>
        <h5>{name}</h5>
        <span>{location}</span>
      </div>
    </Container>
  );
}

export default UserContainer;
