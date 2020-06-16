import React, { useState } from 'react';

import { Container } from './styles';

import ProfileWrapper from '../../components/ProfileComponents/Wrapper';
import CreatePost from '../../components/FeedComponents/CreatePost';

function Profile() {
  const [post, setPost] = useState(null);

  return (
    <ProfileWrapper>
      <Container>
        {post ? (
          <div>post</div>
        ) : (
          <div>
            <CreatePost />
          </div>
        )}
      </Container>
    </ProfileWrapper>
  );
}

export default Profile;
