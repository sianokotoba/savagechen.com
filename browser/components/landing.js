import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rsvpOkay } from '../reducers/navigation';
import { rsvp_code } from '../../secrets';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.onRSVPSubmit = this.onRSVPSubmit.bind(this);
  }

  onRSVPSubmit(evt) {
    evt.preventDefault();
    let entered_code = evt.target.code.value;
    if (entered_code === rsvp_code) {
      this.props.showNavOnRSVP();
      this.props.history.push(`/rsvp-form`);
    } else {
      // Reset the input value to empty string
      $('#code').val('');
      alert(`The wrong code was entered. Please try again.`);
    }
  }

  render() {
    return (
      <div className="row landing-container">
        <h3>PLEASE JOIN US FOR A</h3>
        <h2>WEDDING CELEBRATION</h2>
        <h3>IN HONOR OF</h3>
        <h1>Jane & John Savage</h1>
        <h3>SUNDAY MAY 6, 2018 </h3>
        <h2>
          <a href="https://www.atlantisbahamas.com/" target="_blank">The Cove at Atlantis</a>
        </h2>
        <h3>Paradise Island, Nassau, Bahamas</h3>
        <hr />
        { //<!-- Modal Trigger -->
          // <button data-target="modal1" class="btn modal-trigger">Modal</button>
        }
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
        <button className="message-btn waves-effect waves-light btn-large" onClick={(e) => this.yesAttending(e)}>
          send a message
        </button>

        {//<!-- Modal Structure -->
        }
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
        {
          // <h4>Please enter the code to RSVP:</h4>
          // <div className="row">
          //   <div className="col s3"></div>
          //   <form className="col s6" onSubmit={this.onRSVPSubmit}>
          //     <div className="row">
          //       <div className="input-field col s12">
          //         <input id="code" type="text" className="validate" required autoFocus/>
          //         <button className="rsvp-btn waves-effect waves-light btn-large">
          //           R  S  V  P
          //         </button>
          //       </div>
          //     </div>
          //   </form>
          //   <div className="col s3"></div>
          // </div>
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
)(Landing);
