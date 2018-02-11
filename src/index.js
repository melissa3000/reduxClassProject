//Top level component is the one that should fetch data

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

    // Keep initial hard coded search so page isn't blank when it initially loads
    this.videoSearch('kittens');
  }

  // Add search bar callback that allows user to search for new videos - it will
  // take a string (search term) and make a new YTSearch and set the state of the
  // new list of videos
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
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

