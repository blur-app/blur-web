import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Home, Profile, Me } from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/me" component={Me} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
