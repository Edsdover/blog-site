import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router-dom';
import { history } from './../store/configure-store';
import { connect } from 'react-redux';

import Header from '../containers/header';
import LandingPage from '../containers/landing-page';
import Login from '../containers/login';
import WritePost from '../containers/write-post';
import Signup from '../containers/signup';
import '../styles/app.css';

const PrivateRoute = ({component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
};

const PublicRoute = ({component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className='app-container'>
          <Header />
          <div className="container">
            <Route exact path="/" component={ LandingPage }/>
            <PublicRoute authenticated={this.props.authenticated }  path="/signup" component={ Signup } />
            <PublicRoute authenticated={this.props.authenticated }  path="/login" component={ Login } />
            <PrivateRoute authenticated={this.props.authenticated }  path="/write-post" component={ WritePost } />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(App);
