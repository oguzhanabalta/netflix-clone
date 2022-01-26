import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';

export function App() {

  return (
    <Router>
      <Routes>
      <Route path="/browse" element={<Browse />}/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path={ROUTES.HOME} element={<Home />}/>
      </Routes>
    </Router>
  );
}