import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="row nav-links">
            <div className="col-sm-4 col-xs-4">
              <Link to="/rsvp-form">
                <h4>RSVP</h4>
              </Link>
            </div>
            <div className="col-sm-4 col-xs-4">
              <Link to="/guestlist">
                <h4>Guestlist</h4>
              </Link>
            </div>
            <div className="col-sm-4 col-xs-4">
              <Link to="/registry">
                <h4>Registry</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    )
  }
}
