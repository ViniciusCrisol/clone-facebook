import React from 'react';

import { AuthProvider } from './AuthContext';

function AppProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
