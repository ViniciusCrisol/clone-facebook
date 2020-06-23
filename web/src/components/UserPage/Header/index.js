import React from 'react';
import { MdPersonAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Container, MainContainer } from './styles';

import Info from '../Info';
import api from '../../../services/api';

function Header({ user }) {
  async function addFriend() {
    try {
      api.post(`friend-request/${user.id}`);
    } catch (error) {
      toast(error.response.data.error);
    }
  }

  return (
    <Container>
      <MainContainer>
        <img src={user.avatar_url} alt={user.name} />

        <button onClick={() => addFriend(user.id)}>
          <MdPersonAdd size={30} />
        </button>

        <main>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
        </main>
      </MainContainer>
      <Info
        birthday={user.birthday}
        work_place={user.work_place}
        location={user.location}
      />
    </Container>
  );
}

export default Header;
