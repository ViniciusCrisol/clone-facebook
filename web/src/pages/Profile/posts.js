import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import ProfileWrapper from '../../components/ProfileComponents/Wrapper';
import Post from '../../components/FeedComponents/Post';
import Explore from '../../components/ProfileComponents/Explore';
import Loading from '../../components/Loading';

import api from '../../services/api';

function Profile() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get('list-posts');

        setPosts(response.data);
      } catch (error) {
        toast(error.response.data.error);
      }
      setLoading(false);
    }

    getPosts();
  }, []);

  return (
    <ProfileWrapper>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </ProfileWrapper>
  );
}

export default Profile;
