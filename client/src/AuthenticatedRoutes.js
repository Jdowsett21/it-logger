import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppShell from './AppShell';
import { connect } from 'react-redux';
import { FetchProvider } from './context/FetchContext';
const AuthenticatedRoutes = ({ isAuthenticated, children, ...rest }) => {
  return (
    <FetchProvider>
      <Route
        {...rest}
        render={() =>
          isAuthenticated ? (
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
});

export default connect(mapStateToProps)(AuthenticatedRoutes);
