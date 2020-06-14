import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';

import Content from './components/Content';
import Menu from './components/Menu';

import AppProvider from './Hooks';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Menu />
        <Content>
          <Routes />
        </Content>
      </AppProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
