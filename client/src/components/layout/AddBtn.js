import React from 'react';
import { connect } from 'react-redux';
// import M from 'materialize-css/dist/js/materialize.min.js';
import { clearTech } from '../../actions/techActions';
function AddBtn({ clearTech, techs }) {
  // !const noTechs = () => {
  //!   M.toast({ html: 'Please enter a technician first' });
  // !};
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className={`btn-floating btn-large blue darken-2 modal-trigger 
        `}
        // onClick={noTechs}
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a
            href='#add-tech-modal'
            className='btn-floating red modal-trigger'
            onClick={() => clearTech()}
          >
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   techs: state.tech.techs,
// });
export default connect(null, { clearTech })(AddBtn);
