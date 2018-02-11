// This component can be functional because it doesn't need to have state

import React from 'react';

// use ({video}) as input instead of (props) as part of ES6 feature {variable}
const VideoDetail = ({video}) => {
  // add check to make sure video prop received before attempting to render
  if (!video) {
    return <div>Loading...</div>;
  }

  // {video} object above includes property of url that we can use to access ID
  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed/' + videoID;
  // String interpolation or template strings in ES6 allow us to write the above
  // line like this: (note use of backtick and not single quote - button to left of 1)
  const url = `https://www.youtube.com/embed/${videoId}`;


  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-iframe" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;