import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserAuthenticated, setAuthInfo } from '../actions/authActions';

function Home({
  auth: { isAuthenticated, expiresAt },
  isUserAuthenticated,
  setAuthInfo,
}) {
  useEffect(() => {
    isUserAuthenticated();
    // setAuthInfo();
  }, [expiresAt]);

  return (
    <div>
      {isAuthenticated && <Redirect to='/dashboard' />}
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
  isUserAuthenticated,
  setAuthInfo,
})(Home);
