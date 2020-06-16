import React from 'react';

import { Container, ContentFeed } from './styles';

import HeaderFeed from '../../components/FeedComponents/Header';
import CreatePost from '../../components/FeedComponents/CreatePost';
import Post from '../../components/FeedComponents/Post';

function feed() {
  return (
    <Container>
      <HeaderFeed />
      <ContentFeed>
        <CreatePost />

        <Post />
      </ContentFeed>
    </Container>
  );
}

export default feed;
