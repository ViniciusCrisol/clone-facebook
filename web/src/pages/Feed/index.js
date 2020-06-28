import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import CreatePost from '../../components/FeedComponents/CreatePost';
import SearchBar from '../../components/FeedComponents/SearchBar';
import HeaderFeed from '../../components/FeedComponents/Header';
import Post from '../../components/FeedComponents/Post';
import Loading from '../../components/Loading';

import api from '../../services/api';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [laoding, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('posts');
      setPosts(response.data);
      setLoading(false);
    }
    loadPosts();
  }, []);

  return (
    <Container>
      <SearchBar />
      <HeaderFeed />
      <CreatePost />
      {laoding ? (
        <Loading />
      ) : (
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      )}
    </Container>
  );
}

export default Feed;
