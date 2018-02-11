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

    // Add selected video as an object that will be passed into video detail
    // Pass callback from VideoList and then from there to Video_list_item, when
    // video list item is clicked it'll run the callback it'll run the video

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // Must break back out into long form syntax to also set an initial video, so
    // it doesn't hang on initial loading... screen
    YTSearch({ key: API_KEY, term: 'kittens'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // pass data (prop) from App into the video list
  // pass the first video in the state list for testing
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));

