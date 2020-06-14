import React from 'react';

import Container from '../../styles/form';

import { useAuth } from '../../Hooks/AuthContext';

function SignIn() {
  const { signIn } = useAuth();

  function handleSubmit() {
    signIn();
  }

  return (
    <Container>
      amor
      <button onClick={handleSubmit}>submit</button>
    </Container>
  );
}

export default SignIn;
