import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { tendr_link } from '../../secrets';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Attending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }

    this.guestSelect = this.guestSelect.bind(this);
  }

  addNumberOfGuests(event, index, value) {
    event.preventDefault();
    this.setState({ value: value });
  }

  render () {
    console.log("CORERECT?", tendr_link)
    return (
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">


          <SelectField
            value={this.state.value}
            onChange={this.addNumberOfGuests}>
            <MenuItem value={0} primaryText="Select One" />
            <MenuItem value={1} primaryText="Myself" />
            <MenuItem value={2} primaryText="+ 1" />
            <MenuItem value={3} primaryText="+ 2" />
            <MenuItem value={4} primaryText="+ 3" />
            <MenuItem value={5} primaryText="+ 4" />
          </SelectField>

          {
            [...Array(this.state.value)].map((item, idx) => {
              (<div className="row" key={item-idx}>
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="rsvp-form-inputs validate" />
                  <label className="blue-text text-darken-2" htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>)
            })
          }

          <div className="row">
            <div className="input-field col s12">
              <input id="address1" type="text" className="validate" />
              <label htmlFor="address1">Address 1</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="address2" type="text" className="validate" />
              <label htmlFor="address2">Address 2</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input id="city" type="text" className="rsvp-form-inputs validate" />
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s4">
              <input id="state" type="text" className="validate" />
              <label htmlFor="state">State</label>
            </div>
            <div className="input-field col s4">
              <input id="zip_code" type="text" className="validate" />
              <label htmlFor="zip_code">Zip Code</label>
            </div>
          </div>


          <h3>Gifts are not expected.</h3>
          <h3>We would just love for you to celebrate our wedding with us.</h3>
          <h3>However, if you would like to send a gift, please use the cash registry link below:</h3>
          <h4><a href={tendr_link} target="_blank" rel="noopener">TENDR LINK</a></h4>

        </div>
        <div className="col-sm-1"></div>
      </div>
    )
  }
}

const mapStateToProps = () => ({

  });

  const mapDispatchToProps = () => ({

  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Attending);
