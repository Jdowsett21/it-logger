import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import AppSearchBar from './components/layout/AppSearchBar';
import Logs from './components/logs/Logs';
import './App.css';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import TechModal from './components/techs/TechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  //initializes materialize javascript
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
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
    </Provider>
  );
}

export default App;
