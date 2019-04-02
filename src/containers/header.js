import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from '../actions'

import logo from '../logo.svg';
import '../styles/header.css';

class Header extends React.Component {
  callSignoutAction() {
    this.props.signOutUser();
  }

  renderAuthLinks() {
    if (this.props.authenticated) {
      return [
        <p className="nav-item" key={1}>
          <Link className="nav-link" to="/write-post">Write Post</Link>
        </p>,
        <p className="nav-item" key={2}>
          <a className="nav-link right-side-nav" onClick={() => this.callSignoutAction()}>Sign Out</a>
        </p>
      ]
    } else {
      return [
        <p className="nav-item" key={1}>
          <Link className="nav-link" to="/login">Login</Link>
        </p>,
        <p className="nav-item right-side-nav" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </p>
      ]
    }
  }

  render() {
    return (
      <header className="app-header">
      <img src={logo} className="react-logo" alt="logo" />
        <Link className="home-link" to="/">
          <h1 className="app-title">Devin's Girlfriend's Blog</h1>
        </Link>
        <div className="header-links">
          { this.renderAuthLinks() }
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(Header);
