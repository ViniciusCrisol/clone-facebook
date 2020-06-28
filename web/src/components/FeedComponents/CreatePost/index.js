import React, { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import { FiCheckSquare } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';

import api from '../../../services/api';
import { useAuth } from '../../../Hooks/AuthContext';

function CreatePost() {
  const { user } = useAuth();
  const history = useHistory();

  const [image, setImage] = useState(undefined);

  async function handleSubmit(values) {
    try {
      const data = new FormData();

      data.append('text', values.text);
      data.append('image', image);

      await api.post('create-post', data);

      toast('Success !');
      history.push('profile');
    } catch (error) {
      toast(error.response.data.error);
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <img src={user.avatar_url} alt={user.name} />

      <Input
        type='text'
        name='text'
        autoComplete='off'
        placeholder="What's on your mind?"
      />

      <div>
        <label>
          <input
            type='file'
            accept='image/*'
            name='image'
            onChange={(e) => setImage(e.target.files[0])}
          />
          <BsImages size={22} color={image ? 'var(--light-blue)' : ''} />
        </label>

        <button type='submit'>
          <FiCheckSquare size={30} />
        </button>
      </div>
    </Container>
  );
}

export default CreatePost;
