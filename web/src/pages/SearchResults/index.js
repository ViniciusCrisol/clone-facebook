/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Wrapper, LoadMoreButton, NothingFound } from './styles';

import api from '../../services/api';
import { useAuth } from '../../Hooks/AuthContext';

import UserContainer from '../../components/UserContainer';

import background from '../../assets/nothing_found.svg';

function searchResults() {
  const location = useParams();
  const history = useHistory();
  const { user } = useAuth();

  const currentPage = location.search;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  async function search() {
    try {
      const response = await api.get(`search/${currentPage}`, {
        headers: { page, id: user.id },
      });
      setPage(page + 1);

      setUsers([...users, ...response.data]);
      setLoading(false);
    } catch (error) {
      toast(error.response.data.error);
      history.push('/');
    }
  }

  useEffect(() => {
    search();
  }, [currentPage]);

  return (
    <Wrapper>
      <div>
        <span>
          Results of : <strong>{currentPage}</strong>
        </span>
      </div>
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
              <NothingFound>
                <h1>Nothing Found...</h1>
                <span>(Try another search!)</span>
                <img src={background} alt='Nothing found' />
              </NothingFound>
            )}
          </>
        )}
      </Container>

      {users.length === 27 && (
        <LoadMoreButton onClick={search}>Load More</LoadMoreButton>
      )}
    </Wrapper>
  );
}

export default searchResults;
