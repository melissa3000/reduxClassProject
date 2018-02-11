import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // For each element of videos a function will get called with a single video and
  // return a video list item and pass it the video as a property named video

  // use etag as a key becuase it is unique
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;