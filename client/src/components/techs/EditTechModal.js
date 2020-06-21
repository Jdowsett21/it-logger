import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setTech, updateTech } from '../../actions/techActions';
import { updateTechName, setLoading } from '../../actions/logActions';

import { findTechLogs, getLogs } from '../../actions/logActions';
import { Fragment } from 'react';
function EditTechModal({
  tech: { selectedTech },
  oneTechLogs,
  findTechLogs,
  updateTechName,
  updateTech,
}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (selectedTech !== null && selectedTech.length > 0) {
      setFirstName(selectedTech[0].firstName);
      setLastName(selectedTech[0].lastName);
      findTechLogs(selectedTech[0].firstName, selectedTech[0].lastName);
    }
  }, [selectedTech, findTechLogs]);

  const onSubmit = () => {
    const updatedTech = {
      id: selectedTech[0].id,
      firstName,
      lastName,
    };

    updateTech(updatedTech);
    setTech(`${updatedTech.firstName} ${updatedTech.lastName}`);
    oneTechLogs.map((log) => {
      return updateTechName(updatedTech, log);
    });

    setFirstName('');

    setLastName('');
  };

  return (
    <Fragment>
      <div className='modal-content'>
        <h4>{selectedTech ? 'Edit Technician' : 'New Technician'}</h4>
        <div className='row'>
          <div className='input-field'>
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
const mapStatetoProps = (state) => ({
  tech: state.tech,
  oneTechLogs: state.log.oneTechLogs,
});

export default connect(mapStatetoProps, {
  updateTech,
  updateTechName,
  findTechLogs,
  setLoading,
})(EditTechModal);
