// Must import React when writing in jsx

import React, { Component } from 'react';


class SearchBar extends Component {
  // Add state to constructor in class component
  constructor(props) {
    //call parent method by calling super
    super(props);

    // Initialize state by creating a new object and assigning it to this.state
    // include properties you want included on state
    this.state = { term: ''};
  }

  // Capture user's input and pass an object that contains the new state we want
  // to give our component.
  // Always update state by using method this.setState
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        // Render the term property of the state object in the DOM when it's changed
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;