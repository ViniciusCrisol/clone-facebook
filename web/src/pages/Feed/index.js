import React from 'react';

import { Container } from './styles';

import HeaderFeed from '../../components/FeedComponents/Header';
import CreatePost from '../../components/FeedComponents/CreatePost';
import Post from '../../components/FeedComponents/Post';
import SearchBar from '../../components/FeedComponents/SearchBar';

function feed() {
  return (
    <Container>
      <SearchBar />
      <HeaderFeed />
      <CreatePost />

      <Post />
    </Container>
  );
}

export default feed;
