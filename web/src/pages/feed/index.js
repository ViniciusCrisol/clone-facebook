import React from 'react';

import { Container, ContentFeed } from './styles';

import HeaderFeed from '../../components/HeaderFeed';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';

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
