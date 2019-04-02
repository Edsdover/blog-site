import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
// import GifList from '../components/gif-list';
// import GifDetailModal from '../components/gif-detail-modal';
import '../styles/landing-page.css';

class WritePost extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePost);
