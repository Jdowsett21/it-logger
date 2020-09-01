import React, { Fragment, useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
import { isUserAuthenticated } from '../../actions/authActions';

function AddTechModal({ addTech, isUserAuthenticated }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [skills, setSkill] = useState([
    { skill: 'Server', acquired: false },
    { skill: 'Hard Drive', acquired: false },
    { skill: 'Software', acquired: false },
    { skill: 'Development', acquired: false },
    { skill: 'Html', acquired: false },
  ]);
  //eslint-disable-next-line
  const [role, setRole] = useState('1');

  useEffect(() => {
    isUserAuthenticated();
    const skills = [
      { skill: 'Server', acquired: false },
      { skill: 'Hard Drive', acquired: false },
      { skill: 'Software', acquired: false },
      { skill: 'Development', acquired: false },
      { skill: 'Html', acquired: false },
    ];
    skills.map((s) => {
      return {
        skill: s.skill,
        acquired: s.acquired,
      };
    });
    setSkill(skills);
  }, []);

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a firstName and tech' });
    } else {
      let allSkills = skills.map((d) => {
        if (d.acquired) return d.skill;
      });
      allSkills = allSkills.filter(Boolean);

      const tech = {
        firstName,
        lastName,
        role,
        allSkills,
      };

      addTech(tech);

      setFirstName('');

      setLastName('');
    }
  };

  return (
    <Fragment>
      <div id='add-tech-modal' className='modal-content'>
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
          <span>Select Technicians skills</span>

          {skills.map((d) => (
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

export default connect(null, {
  addTech,
  isUserAuthenticated,
})(AddTechModal);
