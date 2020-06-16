import React from 'react';
import { useAuth } from '../../Hooks/AuthContext';

import { Container, Wrapper } from './styles';

function InfoContainer() {
  const { user } = useAuth();

  return (
    <Wrapper>
      {!user.birthday ? (
        <Container>Add your birthday</Container>
      ) : (
        <Container>
          <h5>Birthday</h5>
          <p>01/04/2002</p>
        </Container>
      )}
      {!user.location ? (
        <Container>Add your location</Container>
      ) : (
        <Container>
          <h5>Location</h5>
          <p>Franca/SP</p>
        </Container>
      )}
      {!user.location ? (
        <Container>Add your work place</Container>
      ) : (
        <Container>
          <h5>Work place</h5>
          <p>Google</p>
        </Container>
      )}
    </Wrapper>
  );
}

export default InfoContainer;
