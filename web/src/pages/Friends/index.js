import React, { useEffect, useState } from 'react';

import { Container, NoFriends } from './styles';

import api from '../../services/api';
import UserContainer from '../../components/UserContainer';

import friendsImage from '../../assets/friends.svg';

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
      {friends.length > 0 ? (
        <>
          {friends.map((friend) => (
            <UserContainer
              key={friend.id}
              id={friend.id}
              name={friend.name}
              location={friend.location}
              avatar_url={friend.avatar_url}
            />
          ))}
        </>
      ) : (
        <NoFriends>
          <img src={friendsImage} alt='Friends' />
          <h1>You do not have friends?</h1>
          <h2>Meet new people !</h2>
        </NoFriends>
      )}
    </Container>
  );
}

export default Friends;
