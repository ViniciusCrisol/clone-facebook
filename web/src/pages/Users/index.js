import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';

import Header from '../../components/UsersComponents/Header';

function UserPage() {
  const location = useParams();

  const currentPage = location.id;
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/show-user/${currentPage}`);

      setUser(response.data);
    }
    loadUser();
  }, [currentPage]);

  return (
    <Container>
      <Header user={user} />
    </Container>
  );
}

export default UserPage;