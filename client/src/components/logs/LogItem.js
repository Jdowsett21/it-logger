import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import { setTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';
function LogItem({ log, deleteLog, setTech, setCurrent }) {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Item deleted' });
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID # {log.id}</span> Last updated by{' '}
          <span
            href='#add-tech-modal'
            className='modal-trigger black-text'
            style={{ cursor: 'pointer' }}
            onClick={() => setTech(log.tech)}
          >
            {log.tech}
          </span>{' '}
          on <Moment format='MMMM Do YYYY, h:mm:ss:a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text' onClick={onDelete}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default connect(null, {
  deleteLog,
  setCurrent,
  setTech,
})(LogItem);

//we update the techs name
//the old techs name is logged in the current tech
//the new tech name is added to the log of techs
//if we had a part of the state that stored the new name
//we could take the array of logs and filter it by the currentTech

//the problem is the current tech is an array not an object

//filter doesnt seem to isolate for objects
