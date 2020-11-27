import React, { Fragment, useEffect } from 'react';
import AddBtn from '../components/layout/AddBtn';
import AddLogModal from '../components/logs/AddLogModal';
import EditLogModal from '../components/logs/EditLogModal';
import TechModal from '../components/techs/TechModal';
import TechListModal from '../components/techs/TechListModal';
import Logs from '../components/logs/Logs';
import AppSearchBar from '../components/layout/AppSearchBar';
import { connect } from 'react-redux';
import {
  logout,
  isUserAuthenticated,
  setAuthInfo,
} from '../actions/authActions';
import { Redirect } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function Dashboard({
  isUserAuthenticated,
  auth: { isAuthenticated, redirectOnLogin },
  setAuthInfo,
  logout,
}) {
  useEffect(() => {
    M.AutoInit();
    setAuthInfo();
    isUserAuthenticated();
  }, []);

  return (
    <Fragment>
      {isAuthenticated === false && redirectOnLogin === false && (
        <Redirect to='/' />
      )}

      <AppSearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <TechModal />
        <TechListModal />
        <Logs />
        <button onClick={logout}>Logout</button>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logout,
  setAuthInfo,
  isUserAuthenticated,
})(Dashboard);
