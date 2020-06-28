import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';

import Header from '../../components/UsersComponents/Header';
import Posts from '../../components/UsersComponents/Posts';
import Loading from '../../components/Loading';

function UserPage() {
  const location = useParams();
  const { id } = location;

  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const user = await api.get(`/show-user/${id}`);
      const posts = await api.get(`/list-posts/${id}`);

      setUser(user.data);
      setPosts(posts.data);

      setLoading(false);
    }
    loadData();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header user={user} />
          <Posts posts={posts} />
        </>
      )}
    </Container>
  );
}

export default UserPage;
