import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import InputMask from 'react-input-mask';
import { MdCake, MdLocationOn, MdCardTravel } from 'react-icons/md';

import { useAuth } from '../../../Hooks/AuthContext';

import { Container, CreateContainer, Wrapper } from './styles';

function InfoContainer() {
  const { user } = useAuth();

  const [openBirthday, setOpenBirthday] = useState(true);
  const [birthdayValue, setBirthdayValue] = useState('');

  async function handleSubmitBirthday() {
    console.log(birthdayValue);
  }

  return (
    <Wrapper>
      {!user.birthday ? (
        <CreateContainer>
          {!openBirthday ? (
            <button onClick={() => setOpenBirthday(!openBirthday)}>
              <MdCake size={30} /> Add your birthday !
            </button>
          ) : (
            <Form onSubmit={handleSubmitBirthday}>
              <InputMask
                mask='99/99/9999'
                onChange={(event) => setBirthdayValue(event.target.value)}
              />
              <button type='submit'>ok</button>
            </Form>
          )}
        </CreateContainer>
      ) : (
        <Container>
          <h5>Birthday</h5>
          <p>01/04/2002</p>
        </Container>
      )}
      {!user.location ? (
        <CreateContainer>
          <button>
            <MdLocationOn size={30} /> Add your location !
          </button>
        </CreateContainer>
      ) : (
        <Container>
          <h5>Location</h5>
          <p>Franca/SP</p>
        </Container>
      )}
      {!user.location ? (
        <CreateContainer>
          <button>
            <MdCardTravel size={30} /> Add your work place !
          </button>
        </CreateContainer>
      ) : (
        <Container>
          <h5>Work place</h5>
          <p>Google</p>
        </Container>
      )}
    </Wrapper>
  );
}

export default InfoContainer;
