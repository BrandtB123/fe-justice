import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './pages/Home';
import TestContainer from './pages/test';
// import DashboardContainer from './containers/DashboardContainer';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/test" component={TestContainer} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;