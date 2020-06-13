import React from 'react';

import { Container, ContentFeed } from './styles';

import HeaderFeed from '../../components/HeaderFeed';
import CreatePost from '../../components/CreatePost';

function feed() {
  return (
    <Container>
      <HeaderFeed />
      <ContentFeed>
        <CreatePost />
      </ContentFeed>
    </Container>
  );
}

export default feed;
