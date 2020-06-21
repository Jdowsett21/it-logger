import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
function TechItem({ tech, deleteTech }) {
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content'>
          <i
            className='material-icons grey-text'
            onClick={() => deleteTech(tech.id)}
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
