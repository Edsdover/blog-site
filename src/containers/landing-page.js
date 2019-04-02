import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import SearchBar from '../components/search-bar'
// import GifList from '../components/gif-list'
// import GifDetailModal from '../components/gif-detail-modal'
import * as actions from '../actions'
import '../styles/landing-page.css'

class LandingPage extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

// recives data from store and maps to state in this case form App.js
// only needed when passing action functions down as props from a container to a component
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

// sends data from container to store to request update/change
// only needed when passing action functions down as props from a container to a component
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

// export the results from the connect function
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
