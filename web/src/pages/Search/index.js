import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Wrapper, LoadMoreButton, NothingFound } from './styles';

import api from '../../services/api';
import { useAuth } from '../../Hooks/AuthContext';

import UserContainer from '../../components/UserContainer';
import Loading from '../../components/Loading';

import background from '../../assets/nothing_found.svg';

function SearchResults() {
  const location = useParams();
  const history = useHistory();
  const { user } = useAuth();

  const currentPage = location.search;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const search = useCallback(async () => {
    try {
      const response = await api.get(`search/${currentPage}`, {
        headers: { page, id: user.id },
      });
      setPage(page + 1);

      setUsers((oldUsers) => [...oldUsers, ...response.data]);
      setLoading(false);
    } catch (error) {
      toast(error.response.data.error);
      history.push('/');
    }
  }, [currentPage, history, page, user.id]);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <Wrapper>
      <div>
        <span>
          Results of : <strong>{currentPage}</strong>
        </span>
      </div>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            {users.length > 0 ? (
              <>
                {users.map((user) => (
                  <UserContainer
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    location={user.location}
                    avatar_url={user.avatar_url}
                  />
                ))}
              </>
            ) : (
              <NothingFound>
                <img src={background} alt='Nothing found' />
                <h1>Nothing Found...</h1>
                <span>(Try another search!)</span>
              </NothingFound>
            )}
          </>
        )}
      </Container>

      {users.length === 27 && (
        <LoadMoreButton onClick={() => search()}>Load More</LoadMoreButton>
      )}
    </Wrapper>
  );
}

export default SearchResults;
