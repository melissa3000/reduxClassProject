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

  // Capture user's input in input tag (search bar) and console the value
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;