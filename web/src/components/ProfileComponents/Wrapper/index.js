import React from 'react';

import { Content } from './styles';

import ProfileHeader from '../Header';

function Wrapper({ children }) {
  return (
    <>
      <ProfileHeader />
      <Content>{children}</Content>
    </>
  );
}

export default Wrapper;
