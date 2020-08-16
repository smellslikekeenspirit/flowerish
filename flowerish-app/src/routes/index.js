import React from 'react';
import {BrowerRouter as Router, Switch, Route} from 'react-router-dom';

import {HomeScreen} from '../screens/homeScreen';
import {LandingScreen} from '../screens/landingScreen';

function Routes(props) {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomeScreen} />
          <Route exact path={"/signin"} component={LandingScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;