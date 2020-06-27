import React from 'react';

import { Container } from './styles';

import background from '../../../assets/explore.svg';

function Explore() {
  return (
    <Container>
      <img src={background} alt='Explore' />

      <h1>Are you new here ?</h1>
      <h2>Explore our platform !</h2>
    </Container>
  );
}

export default Explore;
