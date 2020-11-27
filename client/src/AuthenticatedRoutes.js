import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppShell from './AppShell';
import { connect } from 'react-redux';
import { FetchProvider } from './context/FetchContext';
const AuthenticatedRoutes = ({
  isAuthenticated,
  redirectOnLogin,
  children,
  ...rest
}) => {
  return (
    <FetchProvider>
      <Route
        {...rest}
        render={() =>
          isAuthenticated || redirectOnLogin ? (
            <AppShell>{children}</AppShell>
          ) : (
            <Redirect to='/' />
          )
        }
      ></Route>
    </FetchProvider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  redirectOnLogin: state.auth.redirectOnLogin,
});

export default connect(mapStateToProps)(AuthenticatedRoutes);
