import React from 'react';
import { AiOutlineLike, AiOutlineSolution } from 'react-icons/ai';

import { Container } from './styles';

function Post({ post }) {
  return (
    <Container>
      <header>
        <img src={post.avatar_url} alt={post.name} />
        <div>
          <h4>{post.name}</h4>
          <span>{post.created_at}</span>
        </div>
      </header>
      <main>
        <section>
          <p>{post.text}</p>
        </section>

        {post.image && <img src={post.image} alt='Post' />}
      </main>
      <footer>
        <button>
          <AiOutlineLike size={30} />0
        </button>
        <button>
          <AiOutlineSolution size={30} />0
        </button>
      </footer>
    </Container>
  );
}

export default Post;
