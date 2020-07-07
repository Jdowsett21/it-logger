import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TechSelectOptions from '../techs/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions';
import { connect } from 'react-redux';
import CategorySelectOptions from './CategorySelectOptions';
function EditLogModal({ currentLog, updateLog }) {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (currentLog) {
      setMessage(currentLog.message);
      setAttention(currentLog.attention);
      setTech(currentLog.tech);
      setCategory(currentLog.category);
    }
  }, [currentLog]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const updatedLog = {
        _id: currentLog._id,
        message,
        attention,
        tech,
        category,
        date: new Date(),
      };
      updateLog(updatedLog);
      M.toast({ html: `Log updated by ${tech}` });
      setMessage('');
      setTech('');
      setCategory('');
      setAttention(false);
    }
  };
  return (
    <div id='edit-log-modal' className='modal' style={{ modalStyle }}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className='row'>
            <div className='input-field'>
              <select
                name='tech'
                value={tech}
                className='browser-default'
                onChange={(e) => setTech(e.target.value)}
              >
                <option value='' disabled>
                  Select Technician
                </option>
                <TechSelectOptions />
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <select
                name='tech'
                value={category}
                className='browser-default'
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value='' disabled>
                  Select Category
                </option>
                <CategorySelectOptions />
              </select>
            </div>
          </div>

          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  checked={attention}
                  value={attention}
                  className='filled-in'
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
}
EditLogModal.propTypes = {
  currentLog: PropTypes.object.isRequired,
  updateLog: PropTypes.func.isRequired,
};
const modalStyle = {
  width: '75%',
  height: '75%',
};
const mapStateToProps = (state) => ({
  currentLog: state.log.currentLog,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
