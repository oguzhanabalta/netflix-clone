import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
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

