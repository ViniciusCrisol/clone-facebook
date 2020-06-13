import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';

import Content from './components/Content';
import Header from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Content>
        <Routes />
      </Content>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
