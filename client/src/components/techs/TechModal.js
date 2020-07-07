import React from 'react';
import { connect } from 'react-redux';
import AddTechModal from './AddTechModal';
import EditTechModal from './EditTechModal';
function TechModal({ selectedTech }) {
  return (
    <div id='add-tech-modal' className='modal'>
      {selectedTech !== null ? <EditTechModal /> : <AddTechModal />}
    </div>
  );
}
const mapStatetoProps = (state) => ({
  selectedTech: state.tech.selectedTech,
});
export default connect(mapStatetoProps)(TechModal);
