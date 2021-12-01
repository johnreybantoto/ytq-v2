import React, { useContext } from 'react';
import { ReactSortable } from 'react-sortablejs';
import VideoContext from '../../context/video/video.context';
import { removeFromQueue, setCurrent, setQueue } from '../../context/video/video.state';
import { IVideoItem } from '../../types';
import VideoItem from './VideoItem';

const VideoQueue = () => {
  const { state, dispatch } = useContext(VideoContext);
  const { videoQueue } = state;

  const setList = (updatedQueue: IVideoItem[]) => {
    setQueue(dispatch, updatedQueue);
  };

  const setCurrentVideo = (item: IVideoItem) => {
    item.isCurrent = true;
    setCurrent(dispatch, item);
  };

  const onRemove = (item: IVideoItem) => {
    removeFromQueue(dispatch, item);
  };

  return (
    <div>
      <ReactSortable list={videoQueue} setList={(updatedList) => setList(updatedList)}>
        {videoQueue?.length > 0 &&
          videoQueue.map((x) => (
            <VideoItem
              key={x.id}
              item={x}
              thumbnailText='Play now'
              isInsideQueue
              onThumbnailClick={setCurrentVideo}
              onRemoveClick={onRemove}
            />
          ))}
      </ReactSortable>
    </div>
  );
};

export default VideoQueue;
