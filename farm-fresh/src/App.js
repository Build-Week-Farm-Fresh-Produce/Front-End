import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import Registration from './components/Registration'
import Home from './components/Home'


import PrivateRoute from './utils/PrivateRoute'


function App() {
  return (
    <Router>
      <Route path='/signin' component={SignIn} />
      <Route path='/register' component={Registration} />
      <Route exact path='/' component={Home} />
    </Router>

  );
}

export default App;
