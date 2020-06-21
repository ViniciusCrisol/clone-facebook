import React from 'react';
import { MdPersonAdd } from 'react-icons/md';

import { Container, MainContainer } from './styles';

import Info from '../Info';

function Header({ avatar_url, name, bio, birthday, work_place, location }) {
  return (
    <Container>
      <MainContainer>
        <img src={avatar_url} alt={name} />

        <button>
          <MdPersonAdd size={30} />
        </button>

        <main>
          <h1>{name}</h1>
          <p>{bio}</p>
        </main>
      </MainContainer>
      <Info birthday={birthday} work_place={work_place} location={location} />
    </Container>
  );
}

export default Header;
