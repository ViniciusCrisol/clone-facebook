import React from 'react';

import { Container } from './styles';

import InfoContainer from '../../components/ProfileComponents/Info';
import ProfileWrapper from '../../components/ProfileComponents/Wrapper';

function Profile() {
  return (
    <ProfileWrapper>
      <Container>
        <InfoContainer />
      </Container>
    </ProfileWrapper>
  );
}

export default Profile;
