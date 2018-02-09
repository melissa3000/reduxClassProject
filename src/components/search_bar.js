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
          // Input value is a controlled component, input is set by state.

          // Typing in the search bar causes an event, the event triggers a
          // change in state. When setState is called, the component immediately re-renders
          // and value of input is updated to the new value of term
        <input
          value = {this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;