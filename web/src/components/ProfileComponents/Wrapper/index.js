import React from 'react';

import ProfileHeader from '../Header';

function Wrapper({ children }) {
  return (
    <div style={{ flex: 1 }}>
      <ProfileHeader />
      {children}
    </div>
  );
}

export default Wrapper;
