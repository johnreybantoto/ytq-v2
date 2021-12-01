import React, { useContext, useState } from 'react';
import VideoContext from '../../context/video/video.context';
import { addToQueue, setCurrent } from '../../context/video/video.state';
import { IVideoItem } from '../../types';
import { getRandomString } from '../../utils';
import VideoItem from './VideoItem';

const SearchResult = () => {
  const { state, dispatch } = useContext(VideoContext);
  const [isShown, setIsShown] = useState(true);

  const { searchResult, videoQueue } = state;

  const addVideoToQueue = (item: IVideoItem) => {
    // generate new id when adding to queue to allow multiple video on queue
    const itemToAdd = { ...item, id: getRandomString() };
    if (videoQueue.length < 1) {
      itemToAdd.isCurrent = true;
      setCurrent(dispatch, itemToAdd);
    }
    addToQueue(dispatch, itemToAdd);
  };

  return (
    <>
      <h4 className='cursor-pointer mb-2' onClick={() => setIsShown(!isShown)}>
        Search result: {isShown ? '👆' : '👇'}
      </h4>
      <div
        className={`border-solid border-2 border-gray-500 rounded-md transition duration-500 ease-in-out ${
          isShown ? 'block' : 'hidden'
        }`}
      >
        {searchResult?.length > 0 &&
          searchResult.map((x) => (
            <VideoItem key={x.id} onThumbnailClick={addVideoToQueue} item={x} thumbnailText='Add to queue' />
          ))}
      </div>
    </>
  );
};

export default SearchResult;
