import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import VideoContext from '../../context/video/video.context';
import { setCurrent } from '../../context/video/video.state';

const VideoPlayer = () => {
  const youtubeUrl = 'https://www.youtube.com/watch?v=';

  const { state, dispatch } = useContext(VideoContext);

  const { currentVideo, videoQueue } = state;

  const playNextInQueue = () => {
    const playedItemIndex = videoQueue.findIndex((x) => x.id === currentVideo?.id);
    if (playedItemIndex >= 0 && playedItemIndex !== videoQueue.length) {
      const nextItemIndex = playedItemIndex + 1;
      const nextItemToPlay = videoQueue[nextItemIndex];
      if (nextItemToPlay) {
        nextItemToPlay.isCurrent = true;
        setCurrent(dispatch, nextItemToPlay);
      }
    }
  };
  return (
    <div>
      {currentVideo && (
        <>
          <h4>Currently playing</h4>
          <div className='video-responsive w-full'>
            <ReactPlayer playing controls onEnded={playNextInQueue} url={`${youtubeUrl}${currentVideo.videoId}`} />
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
