import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: "0001", name: 'umut', age: 35 },
      { id: "0002", name: 'gigi', age: 35 },
      { id: "0003", name: 'memo', age: 34 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // spread operator, more modern
    persons.splice(personIndex, 1);
    this.setState( {
      persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {

    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          }) }
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return(
      <div className="App">
        <h1>hi, i am a react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button"
          onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>
        { persons }
      </div>
    );
  }
}

export default App;