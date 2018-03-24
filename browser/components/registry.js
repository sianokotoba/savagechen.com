import React, { Component } from 'react';
import { connect } from 'react-redux';

class Registry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        Monetary contribution.
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
)(Registry);
