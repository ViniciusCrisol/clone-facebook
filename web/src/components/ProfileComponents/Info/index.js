import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import { MdCake, MdLocationOn, MdCardTravel } from 'react-icons/md';
import { FiCheckSquare } from 'react-icons/fi';

import api from '../../../services/api';

import { useAuth } from '../../../Hooks/AuthContext';

import { Wrapper, Container, CreateContainer } from './styles';

function InfoContainer() {
  const { user, updateUser } = useAuth();

  const [openBirthday, setOpenBirthday] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openWorkPlace, setOpenWorkPlace] = useState(false);

  const [birthdayValue, setBirthdayValue] = useState('');

  async function handleSubmitBirthday() {
    try {
      const response = await api.put('update-user-data', {
        birthday: birthdayValue,
      });

      updateUser(response.data);
    } catch (error) {
      toast(error.response.data.error);
    }
  }

  async function handleSubmit(data) {
    try {
      const response = await api.put('update-user-data', data);

      updateUser(response.data);
    } catch (error) {
      toast(error.response.data.error);
    }
  }

  function handleBirthdayChange(event) {
    const { value } = event.target;

    setBirthdayValue(value);
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
                placeholder='00/00/0000'
                onChange={handleBirthdayChange}
              />
              <button type='submit'>
                <FiCheckSquare size={30} />
              </button>
            </Form>
          )}
        </CreateContainer>
      ) : (
        <Container>
          <div>
            <MdCake size={30} />
            {user.birthday}
          </div>
        </Container>
      )}

      {!user.location ? (
        <CreateContainer>
          {!openLocation ? (
            <button onClick={() => setOpenLocation(true)}>
              <MdLocationOn size={30} /> Add your location !
            </button>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Input
                name='location'
                placeholder='Brooklyn,NY'
                autoComplete='off'
              />
              <button type='submit'>
                <FiCheckSquare size={30} />
              </button>
            </Form>
          )}
        </CreateContainer>
      ) : (
        <Container>
          <div>
            <MdLocationOn size={30} />
            {user.location}
          </div>
        </Container>
      )}

      {!user.work_place ? (
        <CreateContainer>
          {!openWorkPlace ? (
            <button onClick={() => setOpenWorkPlace(true)}>
              <MdCardTravel size={30} /> Add your work place !
            </button>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Input
                name='work_place'
                placeholder='Work Place'
                autoComplete='off'
              />
              <button type='submit'>
                <FiCheckSquare size={30} />
              </button>
            </Form>
          )}
        </CreateContainer>
      ) : (
        <Container>
          <div>
            <MdCardTravel size={30} />
            {user.work_place}
          </div>
        </Container>
      )}
    </Wrapper>
  );
}

export default InfoContainer;
