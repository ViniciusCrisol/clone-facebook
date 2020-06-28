import React, { createContext, useCallback, useState, useContext } from 'react';
import { toast } from 'react-toastify';

import api from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Facecook:token');
    const user = localStorage.getItem('@Facecook:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const checkToken = useCallback(async () => {
    const { token } = data;

    if (token) {
      try {
        await api.get('check-token', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        localStorage.removeItem('@Facecook:token');
        localStorage.removeItem('@Facecook:user');
        setData({});
      }
    }
  }, [data]);

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('create-session', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('@Facecook:token', token);
      localStorage.setItem('@Facecook:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    } catch (error) {
      toast(error.response.data.error);
    }
  }, []);

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
      value={{ user: data.user, signIn, signOut, updateUser, checkToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
