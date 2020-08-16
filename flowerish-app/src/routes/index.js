import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {HomeScreen} from '../screens/homeScreen';
import {LandingScreen} from '../screens/landingScreen';

function Routes(props) {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path={"/home"} component={HomeScreen} />
          <Route exact path={"/"} component={LandingScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;