import React from 'react';

import { Container } from './styles';

function ProfileHeader() {
  return (
    <Container>
      <img
        src='https://api.adorable.io/avatars/285/abotadorable'
        alt='Profile'
      />

      <div>
        <main>
          <h1>Elon Musk</h1>
          <p>
            Btw, SpaceX is no longer planning to upgrade Falcon 9 second stage
            for reusability. Accelerating BFR instead. New design is very
            exciting! Delightfully counter-intuitive.
          </p>
        </main>
        <footer>
          <ul>
            <li className='active'>
              <button>Posts</button>
            </li>
            <li>
              <button>Photos</button>
            </li>
            <li>
              <button>Communities</button>
            </li>
          </ul>
        </footer>
      </div>
    </Container>
  );
}

export default ProfileHeader;
