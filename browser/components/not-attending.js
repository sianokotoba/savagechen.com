import React, { Component } from 'react';
import { Link } from 'react-router';
import { tendr_link } from '../../secrets';

export default class extends Component {
  render () {
    console.log("hiho?", tendr_link)
    return (
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <h3>Gifts are not expected.</h3>
          <h3>We would just love for you to celebrate our wedding with us.</h3>
          <h3>However, if you cannot attend and would like to send a gift, please use the cash registry link below:</h3>
          <h4><a href={tendr_link} target="_blank" rel="noopener">TENDR LINK</a></h4>
        </div>
        <div className="col-sm-1"></div>
      </div>
    )
  }
}
