import React from 'react';

function adminPasswordModal(props) {
  return (
    <div id='admin-password-modal ' className='modal-content'>
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
    </div>
  );
}

export default adminPasswordModal;
