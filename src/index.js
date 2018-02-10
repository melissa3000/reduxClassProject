//Top level component is the one that should fetch data

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyC2P9ybRENihTGZcpPqX0gBi7gN5MUwJoY';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'kittens'}, (videos) => {
      this.setState({ videos });
    });
  }

  // pass data (prop) from App into the video list
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));

