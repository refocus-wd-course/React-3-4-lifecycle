import React, { Component } from 'react';
import ExampleComponent from './components/ExampleComponent';
import './App.css';

class App extends Component {
  // STEP 6: define the constructor here with state { showComponent: true }

  // STEP 9: Create the handleToggleComponent event handler here and setState - showComponent: !prevState.showComponent

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* STEP 7: Add button here  to toggle component */}
          
          {/* STEP 8: Conditionally render the component here  */}
          
        </header>
      </div>
    );
  }
}

export default App;

