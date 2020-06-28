import React, { useEffect, useState } from 'react';

import { Container, NoFriends } from './styles';

import UserContainer from '../../components/UserContainer';
import Loading from '../../components/Loading';

import friendsImage from '../../assets/friends.svg';

import api from '../../services/api';

function Friends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFriends() {
      const response = await api.get('friend-list');

      setFriends(response.data);
      setLoading(false);
    }
    loadFriends();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
}

export default Friends;
