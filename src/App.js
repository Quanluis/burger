import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div>
        <div>
            <h1>Burger App</h1>
        </div>
        <Person />
      </div>
    );
  }
}
export default App;
