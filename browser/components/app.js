import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rsvpOkay } from '../reducers/navigation';
import Footer from './footer';
import Navbar from './navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("!!!!!", this.props)
    return (
      <div className="app-container">
      { // shows navigation based on correct RSVP code
        this.props.nav.showNav ? (
          <div className="row top-container">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
              <Navbar />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
          </div>
        ) : (
          <div className="row hidden-nav">
          </div>
        )
      }

        <div className="row middle-container">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            {this.props.children}
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        </div>

      { // shows navigation based on correct RSVP code
        this.props.nav.showNav ? (
          <div className="row bottom-container">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
              <Footer />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
          </div>
        ) : (
          <div className="row hidden-nav">
          </div>
        )
      }
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    nav: state.nav
  }
};

const mapDispatchToProps = function(dispatch) {
  return {
    showNavOnRSVP: () => {
      dispatch(rsvpOkay());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
