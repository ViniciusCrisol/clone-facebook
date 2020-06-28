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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/show-user/${id}`);

      setUser(response.data);
    }
    loadUser();
  }, [id]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get(`/list-posts/${id}`);

      setPosts(response.data);
      setLoading(false);
    }
    loadPosts();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header user={user} />
          <Posts key={posts.id} posts={posts} />
        </>
      )}
    </Container>
  );
}

export default UserPage;
