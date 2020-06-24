import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';
import UserContainer from '../../components/UserContainer';

function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function loadFriends() {
      const response = await api.get('friend-list');

      setFriends(response.data);
    }
    loadFriends();
  }, []);

  return (
    <Container>
      {friends.map((friend) => (
        <UserContainer
          key={friend.id}
          id={friend.id}
          name={friend.name}
          location={friend.location}
          avatar_url={friend.avatar_url}
        />
      ))}
    </Container>
  );
}

export default Friends;
