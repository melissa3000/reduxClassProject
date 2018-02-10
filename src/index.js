//Top level component is the one that should fetch data

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC2P9ybRENihTGZcpPqX0gBi7gN5MUwJoY';

// Make YouTube API call



class App extends Component {
  // set up constructor for state
  constructor(props){
    super(props);

    this.state = { videos: [] };

    // Include search in constructor so that the first search isn't empty and state
    // will be set right off
    YTSearch({ key: API_KEY, term: 'kittens'}, (videos) => {
      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));

