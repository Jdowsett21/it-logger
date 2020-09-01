import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import { getTechs } from '../../actions/techActions';
import { isUserAuthenticated } from '../../actions/authActions';
import CategorySelectOptions from './CategorySelectOptions';

function AddLogModal({ addLog }) {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  const [category, setCategories] = useState('');

  useEffect(() => {
    isUserAuthenticated();
    setMessage('');
    setTech('');
    setCategories('');
    setAttention(false);
  }, []);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        category,
        date: new Date(),
      };

      addLog(newLog);
      M.toast({ html: `Log added by ${tech}` });

      setMessage('');
      setTech('');
      setCategories('');
      setAttention(false);
    }
  };
  return (
    <div id='add-log-modal' className='modal' style={{ modalStyle }}>
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
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
          <div className='row'>
            <div className='input-field'>
              <select
                name='category'
                value={category}
                className='browser-default'
                onChange={(e) => {
                  setCategories(e.target.value);
                }}
              >
                <option value=''>Skill Required</option>
                <CategorySelectOptions />
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <select
                name='tech'
                value={tech}
                className='browser-default'
                onChange={(e) => setTech(e.target.value)}
                disabled={category === '' ? true : false}
              >
                <option value='' disabled>
                  Select Technician
                </option>
                <TechSelectOptions category={category} />
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
          disabled={tech === '' ? true : false}
          className='modal-close waves-effect blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
}

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default connect(null, { isUserAuthenticated, addLog, getTechs })(
  AddLogModal
);
