import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Container from '../../styles/form';

function SignUp() {
  const history = useHistory();

  function handleSubmit() {
    history.push('/');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <Input name='name' placeholder='Name' />
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Password' />
        <Input
          name='confirm-password'
          type='password'
          placeholder='Comfirm password'
        />

        <button type='submit'>submit</button>
        <Link to='/'>I already have a account !</Link>
      </Form>
    </Container>
  );
}

export default SignUp;
