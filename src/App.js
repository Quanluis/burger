import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'max', age: 28},
      {name: 'bob', age: 26},
      {name: 'joe', age: 23}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // Dont use this => this.state.persons[0].name="Luis"
    this.setState({
      persons: [
      {name: newName, age: 28},
      {name: 'bob', age: 26},
      {name: 'joe', age: 27}
    ]})
  }


  render() {
    return (
      <div>
        <div>
            <h1>Burger App</h1>
        </div>
        <button onClick = {() => this.switchNameHandler('LUIS!!!')} >Switch Name</button>
        <Person
         name = {this.state.persons[0].name} age = {this.state.persons[0].age}
          >My Hobbies: Racing</Person>
        <Person
         name = {this.state.persons[1].name}  age = {this.state.persons[1].age}
         click = {this.switchNameHandler.bind(this, 'Max!!')}
          />
        <Person 
         name = {this.state.persons[2].name}  age = {this.state.persons[2].age}

         />
      </div>
    );
  }
}
export default App;
