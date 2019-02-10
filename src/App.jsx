import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Home, Profile, Me } from './pages';
import {Header, Footer} from './components/navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MediaQuery query="(max-width: 1224px)">
          <Header />
        </MediaQuery>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/me" component={Me} />
        </Switch>

        <MediaQuery query="(max-width: 1224px)">
          <Footer />
        </MediaQuery>
      </BrowserRouter>
    );
  }
}

export default App;
