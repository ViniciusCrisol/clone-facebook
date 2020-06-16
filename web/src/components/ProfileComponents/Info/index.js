import React from 'react';
import { MdCake, MdLocationOn, MdCardTravel } from 'react-icons/md';

import { useAuth } from '../../../Hooks/AuthContext';

import { Container, CreateContainer, Wrapper } from './styles';

function InfoContainer() {
  const { user } = useAuth();

  return (
    <Wrapper>
      {!user.birthday ? (
        <CreateContainer>
          <div>
            <MdCake size={30} /> Add your birthday !
          </div>
        </CreateContainer>
      ) : (
        <Container>
          <h5>Birthday</h5>
          <p>01/04/2002</p>
        </Container>
      )}
      {!user.location ? (
        <CreateContainer>
          <div>
            <MdLocationOn size={30} /> Add your location !
          </div>
        </CreateContainer>
      ) : (
        <Container>
          <h5>Location</h5>
          <p>Franca/SP</p>
        </Container>
      )}
      {!user.location ? (
        <CreateContainer>
          <div>
            <MdCardTravel size={30} /> Add your work place !
          </div>
        </CreateContainer>
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
