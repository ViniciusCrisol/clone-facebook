import React, { useState } from 'react';
import { MdPersonAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Container, MainContainer } from './styles';

import Info from '../Info';
import api from '../../../services/api';

function Header({ user }) {
  const [friendRequest, setFriendRequest] = useState(user.friend_request);

  async function addFriend() {
    setFriendRequest(true);
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

        {!user.friend && (
          <>
            {friendRequest ? (
              <button disabled onClick={() => addFriend(user.id)}>
                <MdPersonAdd size={30} />
              </button>
            ) : (
              <button onClick={() => addFriend(user.id)}>
                <MdPersonAdd size={30} />
              </button>
            )}
          </>
        )}

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
