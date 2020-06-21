import React from 'react';

import { Container } from './styles';

function UserContainer({ name, location, avatar_url, userID }) {
  return (
    <Container to={`/search-profile/${userID}`}>
      <img src={avatar_url} alt={name} />
      <div>
        <h5>{name}</h5>
        <span>{location}</span>
      </div>
    </Container>
  );
}

export default UserContainer;
