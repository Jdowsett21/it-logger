import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppShell from './AppShell';
import { connect } from 'react-redux';

const AdminRoutes = ({ isAuthenticated, isAdmin, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated && isAdmin ? (
          <AppShell>{children}</AppShell>
        ) : (
          <Redirect to='/' />
        )
      }
    ></Route>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(AdminRoutes);
