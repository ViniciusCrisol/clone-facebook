import React from 'react';

import { Container } from './styles';
import Post from '../../FeedComponents/Post';

function Posts({ posts }) {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
}

export default Posts;
