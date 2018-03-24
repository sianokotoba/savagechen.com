import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Navbar from './navbar';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
      <Navbar />
{
        // <div className="row">
        //   <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        //   <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
        //     <Navbar />
        //   </div>
        //   <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        // </div>
        // <div className="row">
        //   <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        //   <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
        //     {this.props.children}
        //   </div>
        //   <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        // </div>
        // <div className="row">
        //   <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        //   <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
        //     <Footer />
        //   </div>
        //   <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        // </div>
}
      </div>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
