import React from 'react';

import ProfileHeader from '../ProfileHeader';

function ProfileContent({ children }) {
  return (
    <div style={{ flex: 1 }}>
      <ProfileHeader />
      {children}
    </div>
  );
}

export default ProfileContent;
