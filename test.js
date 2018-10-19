import React from 'react';
import { connect } from 'react-redux';
import { SignedOut, SignedIn } from "./router";

class Test extends React.Component {
  render() {
    console.log('fdjalfjdkslajflkds', this.props.services);
    return (
      <SignedOut/>
    );
  }
}

export default connect(state => {
  return {
    services: (state || {}).services || {},
  };
})(Test);