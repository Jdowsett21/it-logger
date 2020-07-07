import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
function TechItem({ tech, deleteTech }) {
  return (
    <li className='collection-item'>
      <div>
        <div className='col'>
          <span className='grey-text'>Tech: </span>
          <span style={{ paddingRight: '1em' }}>
            {`${tech.firstName} ${tech.lastName}`}
          </span>
        </div>
        <span>
          <span className='grey-text'>Skills: </span>
          {tech.allSkills.map((skill, i) =>
            i + 1 - tech.allSkills.length === 0 ? (
              <span key={skill}>{`${skill}`} </span>
            ) : (
              <span key={skill}>{`${skill},`} </span>
            )
          )}
        </span>

        <a href='#!' className='secondary-content'>
          <i
            className='material-icons grey-text'
            onClick={() => deleteTech(tech._id)}
          >
            delete
          </i>
        </a>
      </div>
    </li>
  );
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
