import React from 'react';

import { Container } from './styles';

import CreatePost from '../../components/FeedComponents/CreatePost';
import SearchBar from '../../components/FeedComponents/SearchBar';
import HeaderFeed from '../../components/FeedComponents/Header';
import Post from '../../components/FeedComponents/Post';

function feed() {
  return (
    <Container>
      <SearchBar />
      <HeaderFeed />
      <CreatePost />
    </Container>
  );
}

export default feed;
