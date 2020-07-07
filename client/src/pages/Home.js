import React, { Fragment } from 'react';
import AddBtn from '../components/layout/AddBtn';
import AddLogModal from '../components/logs/AddLogModal';
import EditLogModal from '../components/logs/EditLogModal';
import TechModal from '../components/techs/TechModal';
import TechListModal from '../components/techs/TechListModal';
import NonAuthNavBar from '../components/layout/NonAuthNavBar';
import Logs from '../components/logs/Logs';
import AppSearchBar from '../components/layout/AppSearchBar';

function Home(props) {
  return (
    <Fragment>
      {/* <NonAuthNavBar />  */}
      <AppSearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <TechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default Home;
