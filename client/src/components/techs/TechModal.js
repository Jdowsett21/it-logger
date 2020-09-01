import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AddTechModal from './AddTechModal';
import EditTechModal from './EditTechModal';
import { isUserAuthenticated } from '../../actions/authActions';
function TechModal({ selectedTech }) {
  useEffect(() => {
    isUserAuthenticated();
  });
  return (
    <div id='add-tech-modal' className='modal'>
      {selectedTech !== null ? <EditTechModal /> : <AddTechModal />}
    </div>
  );
}
const mapStatetoProps = (state) => ({
  selectedTech: state.tech.selectedTech,
});
export default connect(mapStatetoProps, { isUserAuthenticated })(TechModal);
