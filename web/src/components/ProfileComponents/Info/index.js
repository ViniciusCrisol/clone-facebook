import React from 'react';
import { MdCake } from 'react-icons/md';

import { useAuth } from '../../../Hooks/AuthContext';

import { Container, CreateContainer, Wrapper } from './styles';

function InfoContainer() {
  const { user } = useAuth();

  return (
    <Wrapper>
      {!user.birthday ? (
        <CreateContainer>
          <MdCake size={30} /> Add your birthday
        </CreateContainer>
      ) : (
        <Container>
          <h5>Birthday</h5>
          <p>01/04/2002</p>
        </Container>
      )}
      {!user.location ? (
        <CreateContainer>Add your location</CreateContainer>
      ) : (
        <Container>
          <h5>Location</h5>
          <p>Franca/SP</p>
        </Container>
      )}
      {!user.location ? (
        <CreateContainer>Add your work place</CreateContainer>
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
