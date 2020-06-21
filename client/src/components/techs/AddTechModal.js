import React, { Fragment, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';

function AddTechModal({ addTech }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a firstName and tech' });
    } else {
      const tech = {
        firstName,
        lastName,
      };
      addTech(tech);

      setFirstName('');

      setLastName('');
    }
  };

  return (
    <Fragment>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <label htmlFor='message' className='active'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <label htmlFor='message' className='active'>
              Last Name
            </label>

            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
    </Fragment>
  );
}

export default connect(null, {
  addTech,
})(AddTechModal);
