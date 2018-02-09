import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC2P9ybRENihTGZcpPqX0gBi7gN5MUwJoY';

// Create a new component. This component should produce some html.
// Written in jsx and babel is used to transpile and render the component -
// it turns the jsx into javascript that can produce html

// Only one component per file

// Take this compenent's generated HTML and put it on the page (in the DOM)

// Passes an instance of App to render
// container class referenced below is from html doc and is root react element


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector('.container'));

