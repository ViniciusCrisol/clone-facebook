import React from 'react';
import { MdCake, MdLocationOn, MdCardTravel } from 'react-icons/md';

import { Wrapper, Container } from './styles';

function InfoContainer({ birthday, work_place, location }) {
  return (
    <Wrapper>
      {birthday && (
        <Container>
          <div>
            <MdCake size={30} />
            {birthday}
          </div>
        </Container>
      )}

      {location && (
        <Container>
          <div>
            <MdLocationOn size={30} />
            {location}
          </div>
        </Container>
      )}

      {work_place && (
        <Container>
          <div>
            <MdCardTravel size={30} />
            {work_place}
          </div>
        </Container>
      )}
    </Wrapper>
  );
}

export default InfoContainer;
