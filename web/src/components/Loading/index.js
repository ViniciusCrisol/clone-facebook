import React from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <Loader
        type='TailSpin'
        color='var(--light-blue)'
        height={100}
        width={100}
      />
    </Container>
  );
}

export default Loading;
