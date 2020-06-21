import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import { getLogs, updateTechName } from '../../actions/logActions.js';
import { getTechs } from '../../actions/techActions.js';

function Logs({ log: { logs, loading }, getLogs, getTechs }) {
  useEffect(() => {
    getLogs();
    getTechs();

    //eslint-disable-next-line
  }, [updateTechName]);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  log: state.log,
});
//then we need to pass it into connect
export default connect(mapStateToProps, { getLogs, getTechs, updateTechName })(
  Logs
);
