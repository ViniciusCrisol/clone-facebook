import React from 'react';
import { Input } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import { Container } from './styles';

function SearchBar() {
  const history = useHistory();

  async function handleSubmit({ search }) {
    history.push(`/search/${search}`);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type='text'
        autoComplete='off'
        name='search'
        placeholder='Searching for something?'
      />

      <button>
        <AiOutlineSearch size={30} />
      </button>
    </Container>
  );
}

export default SearchBar;
