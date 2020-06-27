import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import api from '../../services/api';

import CreatePost from '../../components/FeedComponents/CreatePost';
import SearchBar from '../../components/FeedComponents/SearchBar';
import HeaderFeed from '../../components/FeedComponents/Header';
import Post from '../../components/FeedComponents/Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('posts');
      setPosts(response.data);
    }
    loadPosts();
  }, []);

  return (
    <Container>
      <SearchBar />
      <HeaderFeed />
      <CreatePost />
      <main>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </Container>
  );
}

export default Feed;
