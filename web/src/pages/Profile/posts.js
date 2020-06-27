import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import ProfileWrapper from '../../components/ProfileComponents/Wrapper';
import Post from '../../components/FeedComponents/Post';
import Explore from '../../components/ProfileComponents/Explore';

import api from '../../services/api';

function Profile() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get('list-posts');

        setPosts(response.data);
      } catch (error) {
        toast(error.response.data.error);
      }
    }

    getPosts();
  }, []);

  return (
    <ProfileWrapper>
      <>
        {posts.length > 0 ? (
          <>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </>
        ) : (
          <Explore />
        )}
      </>
    </ProfileWrapper>
  );
}

export default Profile;
