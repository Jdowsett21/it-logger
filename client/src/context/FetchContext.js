import React, { createContext, useEffect } from 'react';
import { authAxios } from '../utils/authFetch';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await authAxios.get('/users/csrf-token');
      authAxios.defaults.headers['X-CSRF-Token'] = data.csrfToken;
    };
    getCsrfToken();
    //eslint-disable-next-line
  }, []);

  return <Provider value={{ authAxios }}>{children}</Provider>;
};

export { FetchProvider, FetchContext };
