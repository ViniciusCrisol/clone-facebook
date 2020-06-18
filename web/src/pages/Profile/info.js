import React from 'react';

import InfoContainer from '../../components/ProfileComponents/Info';
import ProfileWrapper from '../../components/ProfileComponents/Wrapper';

function Profile() {
  return (
    <ProfileWrapper>
      <div>
        <InfoContainer />
      </div>
    </ProfileWrapper>
  );
}

export default Profile;
