import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTech } from '../../actions/techActions';

import { updateLog, setLoading } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import { findTechLogs } from '../../actions/logActions';
import { Fragment } from 'react';
import { isUserAuthenticated } from '../../actions/authActions';
function EditTechModal({
  tech: { selectedTech },
  oneTechLogs,
  isUserAuthenticated,
  findTechLogs,
  updateLog,
  updateTech,
}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [skills, setSkill] = useState([]);
  const [role, setRole] = useState('');
  useEffect(() => {
    isUserAuthenticated();
  });

  useEffect(() => {
    if (selectedTech !== null && selectedTech.length > 0) {
      setFirstName(selectedTech[0].firstName);
      setLastName(selectedTech[0].lastName);
      setRole(selectedTech[0].role === 'user' ? '1' : '2');
      findTechLogs(selectedTech[0].firstName, selectedTech[0].lastName);

      const allSkills = [
        { skill: 'Server', acquired: false },
        { skill: 'Hard Drive', acquired: false },
        { skill: 'Software', acquired: false },
        { skill: 'Development', acquired: false },
        { skill: 'Html', acquired: false },
      ];

      const newArray = allSkills.map((data) => {
        let item = selectedTech[0].allSkills.find(
          (item) => item === data.skill
        );
        if (item)
          return {
            skill: data.skill,
            acquired: true,
          };
        return data;
      });

      setSkill(newArray);
    }
  }, [selectedTech, findTechLogs]);
  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please fill out first and last name' });
    }

    // if (allSkills.length === 0) {
    //   M.toast({ html: 'You must add a skill before adding a technician' });
    else {
      let allSkills = skills.map((d) => {
        if (d.acquired) return d.skill;
      });
      allSkills = allSkills.filter(Boolean);
      const updatedTech = {
        _id: selectedTech[0]._id,
        firstName,
        lastName,
        role,
        allSkills,
      };
      updateTech(updatedTech);

      oneTechLogs.map((log) => {
        let newLog = {
          _id: log._id,
          message: log.message,
          attention: log.attention,
          tech: `${firstName} ${lastName}`,
          category: log.category,
        };
        updateLog(newLog);
      });

      setFirstName('');
      setLastName('');
      setRole('');
      setSkill('');
    }
  };
  return (
    <Fragment>
      <div className='modal-content'>
        <h4>Edit Technician</h4>
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
        <div className='row'>
          <div className='input-field'>
            <select
              defaultValue='1'
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option name='user' value='1'>
                User
              </option>
              <option name='admin' value='2'>
                Admin
              </option>
            </select>
            <label>Select Role</label>
          </div>
        </div>
        <div className='row'>
          <span>Edit Technician Skills</span>
          {skills &&
            skills.map((d) => (
              <div className='input-field' key={d.skill}>
                <p className='m-2'>
                  <label>
                    <input
                      type='checkbox'
                      checked={d.acquired}
                      value={d.acquired}
                      className='filled-in'
                      onChange={(e) => {
                        let checked = e.target.checked;
                        setSkill(
                          skills.map((data) => {
                            if (d.skill === data.skill) {
                              data.acquired = checked;
                            }

                            return data;
                          })
                        );
                      }}
                    />
                    <span>{d.skill}</span>
                  </label>
                </p>
              </div>
            ))}
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
    </Fragment>
  );
}
const mapStatetoProps = (state) => ({
  tech: state.tech,
  oneTechLogs: state.log.oneTechLogs,
});

export default connect(mapStatetoProps, {
  updateTech,
  updateLog,
  findTechLogs,
  setLoading,
  isUserAuthenticated,
})(EditTechModal);
