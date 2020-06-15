import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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

        <ToastContainer
          autoClose={3000}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          hideProgressBar
          closeOnClick
          draggable
        />

        <Content>
          <Routes />
        </Content>
      </AppProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
