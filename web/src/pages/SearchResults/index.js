/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Wrapper } from './styles';

import SearchBar from '../../components/FeedComponents/SearchBar';

import api from '../../services/api';

import UserContainer from '../../components/UserContainer';

function searchResults() {
  const location = useParams();
  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function search() {
      try {
        const response = await api.get(`search/${location.search}`);
        console.log(response);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        toast(error.response.data.error);
        history.push('/');
      }
    }
    search();
  }, [history, location.search]);

  return (
    <Wrapper>
      <SearchBar />
      <Container>
        {!loading && (
          <>
            {users.length > 0 ? (
              <>
                {users.map((user) => (
                  <UserContainer
                    key={user.id}
                    name={user.name}
                    location={user.location}
                    avatar_url={user.avatar_url}
                  />
                ))}
              </>
            ) : (
              <h1>Nothing found =(</h1>
            )}
          </>
        )}
      </Container>
    </Wrapper>
  );
}

export default searchResults;
