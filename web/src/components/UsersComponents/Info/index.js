import React from 'react';
import { MdCake, MdLocationOn, MdCardTravel } from 'react-icons/md';

import { Wrapper, Container } from './styles';

function InfoContainer({ user }) {
  return (
    <Wrapper>
      {user.birthday && (
        <Container>
          <div>
            <MdCake size={30} />
            {user.birthday}
          </div>
        </Container>
      )}

      {user.location && (
        <Container>
          <div>
            <MdLocationOn size={30} />
            {user.location}
          </div>
        </Container>
      )}

      {user.work_place && (
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
