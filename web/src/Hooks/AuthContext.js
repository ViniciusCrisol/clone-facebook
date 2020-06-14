import React, { createContext, useCallback, useState, useContext } from 'react';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Facecook:token');
    const user = localStorage.getItem('@Facecook:user');

    if (token && user) {
      //  api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(
    async (/*{ email, password }*/) => {
      // const response = await api.post('sessions', {
      //   email,
      //   password,
      // });
      //  const { token, user } = response.data;
      const token = 123;
      const user = 'vinicin';

      console.log('ammor');

      localStorage.setItem('@Facecook:token', token);
      localStorage.setItem('@Facecook:user', JSON.stringify(user));
      // api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user });
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Facecook:token');
    localStorage.removeItem('@Facecook:user');

    setData({});
  }, []);

  const updateUser = useCallback(
    (user) => {
      localStorage.setItem('@Facecook:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    console.log('User must be signed');
  }

  return context;
}

export { AuthProvider, useAuth };
