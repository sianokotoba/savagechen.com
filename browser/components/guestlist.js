import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableExampleSimple from './guestlist-table';

class Guestlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        Please check the guestlist to see other party-goers.
        There is no need to RSVP if your partner has already entered your information.

        <TableExampleSimple />
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
)(Guestlist);
