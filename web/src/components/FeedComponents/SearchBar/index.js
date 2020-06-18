import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Container } from './styles';

function SearchBar() {
  return (
    <Container>
      <input type='text' placeholder='Searching for something?' />

      <button>
        <AiOutlineSearch size={30} />
      </button>
    </Container>
  );
}

export default SearchBar;