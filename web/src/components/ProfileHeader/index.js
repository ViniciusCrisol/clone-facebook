import React from 'react';
import { useAuth } from '../../Hooks/AuthContext';

import { Container } from './styles';

function ProfileHeader() {
  const { user } = useAuth();

  return (
    <Container>
      <img src={user.avatar_url} alt={user.name} />

      <div>
        <main>
          <h1>{user.name}</h1>
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
