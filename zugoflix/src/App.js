import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';


export default function App() {
  return (
    <Router>
        <Browse />
        <Signin />
        <Signup />
        <Home />
    </Router>
  );
}

