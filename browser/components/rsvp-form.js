import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import NotAttending from './not-attending';
import Attending from './attending';

class RSVPForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attending: null
    }

    this.yesAttending = this.yesAttending.bind(this);
    this.notAttending = this.notAttending.bind(this);
  }

  yesAttending(event) {
    event.preventDefault();
    this.setState({ attending: true });
  }

  notAttending(event) {
    event.preventDefault();
    this.setState({ attending: false });
  }

  render() {
    const style = {
      margin: 12,
    };
    return (
      <div className="row rsvp-container">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="rsvp-form-inputs validate" />
              <label className="blue-text text-darken-2" htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s8">
              <h5>Will you attend the ceremony & reception?</h5>
            </div>
            <div className="col s4">
              <button className="rsvp-btn waves-effect waves-light btn-large" onClick={(e) => this.yesAttending(e)}>
                YES
              </button>
              <button className="rsvp-btn waves-effect waves-light btn-large" onClick={(e) => this.notAttending(e)}>
                NO
              </button>
            </div>
          </div>
          {
            this.state.attending === true ?
            ( <Attending /> ) :
            ( this.state.attending === false ?
              (<NotAttending />) :
              <div></div>
            )
          }
          {
            // <div className="row">
            //   <input className="with-gap" name="group1" type="radio" id="test1" />
            //   <label htmlFor="test1">Myself</label>
            // </div>
            // <p>
            //   <input className="with-gap" name="group1" type="radio" id="test2" />
            //   <label htmlFor="test2">+ 1</label>
            //   <input id="other-details" type="textarea" placeholder="Please add your companions name..." className="validate" />
            // </p>
            // <p>
            //   <input className="with-gap" name="group1" type="radio" id="test3"  />
            //   <label htmlFor="test3">Other:</label>
            //   <input id="other-details" type="textarea" className="validate" />
            // </p>
          }
        </form>
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
)(RSVPForm);
