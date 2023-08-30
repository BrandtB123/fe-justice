import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomeContainer from './containers/HomeContainer';
// import DashboardContainer from './containers/DashboardContainer';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={HomeContainer} />
        <Route path="/dashboard" component={DashboardContainer} /> */}
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;