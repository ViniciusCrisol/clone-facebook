import React from 'react';
import { BsImages } from 'react-icons/bs';
import { FiUser, FiSmile, FiCheckSquare } from 'react-icons/fi';

import { Container } from './styles';

function CreatePost() {
  return (
    <Container>
      <img
        src='https://api.adorable.io/avatars/285/adorable.png'
        alt='Profile'
      />

      <input type='text' placeholder="What's on your mind?" />

      <div>
        <button>
          <BsImages size={22} />
        </button>

        <button>
          <FiCheckSquare size={30} />
        </button>
      </div>
    </Container>
  );
}

export default CreatePost;
