import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import App from './App';

const AppWrapper = () => {
  const location = useLocation();

  return (
    <Router>
      <App location={location} />
    </Router>
  );
};

export default AppWrapper;
