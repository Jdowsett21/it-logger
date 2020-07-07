import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import M from 'materialize-css/dist/js/materialize.min.js';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
function App() {
  //initializes materialize javascript
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
