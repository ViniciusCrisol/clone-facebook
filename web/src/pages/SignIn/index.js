import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import Container from '../../styles/form';

import { useAuth } from '../../Hooks/AuthContext';

function SignIn() {
  const { signIn } = useAuth();

  function handleSubmit({ email, password }) {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Password' />

        <button type='submit'>submit</button>
        <Link>Don't have a account ?</Link>
      </Form>
    </Container>
  );
}

export default SignIn;
