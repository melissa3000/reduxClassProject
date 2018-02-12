//Top level component is the one that should fetch data

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC2P9ybRENihTGZcpPqX0gBi7gN5MUwJoY';


class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('kittens');
  }


  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    // Add throttle using lodash so that search results aren't udpated with every
    // key stroke. Instead only want to call onSearchTermChange only every so many
    // milliseconds. Create new const and pass it to onSearchTermChange.

    // Create new fat arrow function and pass it to debounce. Debounce takes inner function
    // and returns new function that can only be called once every 300 ms. Can
    // be called more often, but will only run every 300ms.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          // Passes property onVideoSelect to video_list through props
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));

