import React, { Component } from 'react';

class ExampleComponent extends Component {
  // STEP 1: define the constructor here and declare the state

  // STEP 2: define componentDidMount(), componentDidUpdate(prevProps, prevState) and componentWillUnmount() here

  // STEP 5: define the handleClick handler here with setState() - count: + 1
 
  render() {
    // STEP 3: log ('render')

    return (
    // STEP 4: create a div with h1 inside with title, count and event handler onClick
      <div>
        <h1>Welcome to ExampleComponent!</h1>
      </div>
    );
  }
}

export default ExampleComponent;
