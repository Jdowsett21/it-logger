import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';
import { isUserAuthenticated } from '../../actions/authActions';

function TechListModal({
  getTechs,
  isUserAuthenticated,
  tech: { loading, techs },
}) {
  useEffect(() => {
    isUserAuthenticated();
    getTechs();
  }, []);
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech._id} />)}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs, isUserAuthenticated })(
  TechListModal
);
