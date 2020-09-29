import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { FetchProvider } from './context/FetchContext';

import store from './store';
import './App.css';
import AppShell from './components/AppShell';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AuthenticatedRoutes from './AuthenticatedRoutes';

const Dashboard = lazy(() => import('./pages/Dashboard'));

const LoadingFallback = () => (
  <AppShell>
    <div className='p-4'>Loading...</div>
  </AppShell>
);
const UnauthenticatedRoutes = () => (
  <Switch>
    <Route exact path='/signup'>
      <Signup />
    </Route>
    <Route exact path='/login'>
      <Login />
    </Route>
    <Route exact path='/'>
      <Home />
    </Route>
  </Switch>
);

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <AuthenticatedRoutes path='/dashboard'>
            <Dashboard />
          </AuthenticatedRoutes>
          <UnauthenticatedRoutes />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};
function App() {
  //initializes materialize javascript
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Router>
      <Provider store={store}>
        <FetchProvider>
          <AppRoutes />
        </FetchProvider>
      </Provider>
    </Router>
  );
}

export default App;
