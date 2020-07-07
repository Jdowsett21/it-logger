import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function AppSearchBar({ searchLogs }) {
  const text = useRef('');

  const onChange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <>
      <ul className='right hide-on-med-and-down'>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
      </ul>
      <nav style={{ marginBottom: '30px' }} className='blue'>
        <div class='nav-wrapper'>
          <form>
            <div class='input-field'>
              <input
                id='search'
                type='search'
                placeholder='Search Logs...'
                ref={text}
                onChange={onChange}
              />
              <label for='search'>
                <i class='material-icons'>search</i>
              </label>
              <i class='material-icons icon-close'>close</i>
            </div>
            <a
              class='dropdown-button'
              href='#!'
              data-activates='dropdown1'
              data-beloworigin='true'
            >
              <i class='material-icons '>reorder</i>
            </a>
          </form>
        </div>
      </nav>
    </>
  );
}
AppSearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};
export default connect(null, { searchLogs })(AppSearchBar);
