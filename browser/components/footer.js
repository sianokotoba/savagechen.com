import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="footer-links row">
            <div className="col-sm-6 col-xs-6">
              <Link to="/contact">
                <h4>Contact Us</h4>
              </Link>
            </div>
            <div className="col-sm-6 col-xs-6">
              <Link to ="/guestlist">
                <h4>Guestlist</h4>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <h4>© Sophia Chen 2017</h4>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    )
  }
}
