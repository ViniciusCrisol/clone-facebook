import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';

import Header from '../../components/UserPage/Header';

function UserPage() {
  const location = useParams();

  const currentPage = location.id;
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/show-user/${currentPage}`);

      console.log(response.data);

      setUser(response.data);
    }
    loadUser();
  }, [currentPage]);

  return (
    <Container>
      <Header
        id={currentPage}
        avatar_url={user.avatar_url}
        name={user.name}
        bio={user.bio}
        birthday={user.birthday}
        location={user.location}
        work_place={user.work_place}
      />
    </Container>
  );
}

export default UserPage;
