//Top level component is the one that should fetch data

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC2P9ybRENihTGZcpPqX0gBi7gN5MUwJoY';

// Make YouTube API call
YTSearch({ key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Refactor from functional component to class component so it can keep track
// of list of videos by recording them on its state
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));

