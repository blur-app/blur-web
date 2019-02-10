import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { home } from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
