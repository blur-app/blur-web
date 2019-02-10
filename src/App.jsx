import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Home, Profile, Me, Upload, Login } from './pages';
import {Header, Footer} from './components/navigation';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';


class App extends Component {
  constructor(props) {
    super(props);
    this.client = null;
    this.state ={
      ready: false
    };
  }

  componentDidMount() {
    this.initializeApollo();
  }

  initializeApollo() {
    console.warn('here')
    this.client = new ApolloClient({
      uri: "http://api.blur-app.gq:4000/graphql"
    });

    this.setState({ready: true})
  }

  render() {
    if (!this.state.ready) return null;
    const user_id = localStorage.getItem('user_id');
    return (
      <ApolloProvider client={this.client}>
        <BrowserRouter>
          <div>
            <MediaQuery query="(min-width: 769px)">
              <Header />
            </MediaQuery>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/me" component={Me} />
              <Route path="/upload" component={Upload} />
              <Route path="/login" component={Login} />
            </Switch>

            <MediaQuery query="(max-width: 768px)">
              <Footer />
            </MediaQuery>
            </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
