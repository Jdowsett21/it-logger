import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';
import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../../actions/authActions';
import PropTypes from 'prop-types';
function AppSearchBar({ searchLogs, isUserAuthenticated }) {
  const text = useRef('');

  useEffect(() => {
    isUserAuthenticated();
  });
  const onChange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs..'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}
AppSearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};
export default connect(null, { searchLogs, isUserAuthenticated })(AppSearchBar);
