import React, { Fragment, useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';

function AddTechModal({ addTech }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [skills, setSkill] = useState([]);

  useEffect(() => {
    let skills = [
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
      console.log('onSubmit -> allSkills', allSkills);

      const tech = {
        firstName,
        lastName,
        allSkills,
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
        <span>Select Technicians skills</span>

        {skills.map((d) => (
          <div className='input-field' key={d.skill}>
            <p>
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
})(AddTechModal);
