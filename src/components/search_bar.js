// Must import React when writing in jsx

import React, { Component } from 'react';

// Capture user's input in input tag (search bar) and console the value
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;