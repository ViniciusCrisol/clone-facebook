import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '../../services/api';

import Container from '../../styles/form';

function SignUp() {
  const history = useHistory();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .required('E-mail is required')
          .email('Enter a valid email address'),
        password: Yup.string().min(6, 'Enter a password of at least 6 digits'),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Passwords does not match'
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, email, password } = data;

      await api.post('create-user', { name, email, password });

      history.push('/');
    } catch (error) {
      if (error.errors) error.errors.map((err) => toast(err));
      if (error.response) toast(error.response.data.error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <Input name='name' placeholder='Name' />
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Password' />
        <Input
          name='confirmPassword'
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
