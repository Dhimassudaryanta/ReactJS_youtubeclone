import React from 'react';

const VideoDetail = ({ video, subs, thumb }) => {
  if (!video) {
    return <div>Loading...</div>;
  }



  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <hr></hr>
        <div className="ui grid">
          <div className="ui row">
            <div className="three wide column">

              <h4>{video.snippet.channelTitle}</h4>
            </div>
          </div>
        </div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
