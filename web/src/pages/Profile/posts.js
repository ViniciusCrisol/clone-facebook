import React, { useState } from 'react';

import ProfileWrapper from '../../components/ProfileComponents/Wrapper';
import CreatePost from '../../components/FeedComponents/CreatePost';

function Profile() {
  const [post, setPost] = useState(null);

  return (
    <ProfileWrapper>
      <div>
        {post ? (
          <div>post</div>
        ) : (
          <div>
            <CreatePost />
          </div>
        )}
      </div>
    </ProfileWrapper>
  );
}

export default Profile;
