import React from 'react';
import { IVideoItem } from '../../types';

interface Props {
  item: IVideoItem;
  onThumbnailClick: (item: IVideoItem) => void;
  onRemoveClick?: (item: IVideoItem) => void;
  thumbnailText: string;
  isInsideQueue?: boolean;
}

const VideoItem: React.FC<Props> = ({ item, onThumbnailClick, onRemoveClick, thumbnailText, isInsideQueue }) => {
  const divStyle = `
    flex max-h-32 p-6 bg-white rounded-lg shadow-xl m-3 align-baseline${
      isInsideQueue ? ' bg-gray-400 queued cursor-pointer' : ''
    }${item.isCurrent ? ' current' : ''}`;
  return (
    <div className={divStyle}>
      <div
        className='flex-shrink-0 cursor-pointer'
        onClick={() => {
          onThumbnailClick(item);
        }}
      >
        <img
          src={item.snippet.thumbnails.default.url}
          alt='img'
          title={thumbnailText}
          className='max-w-sm h-20 inline'
        />
      </div>
      <div className='ml-6 pt-1'>
        <h5 className='inline text-gray-900'>{item.snippet.title}</h5>
      </div>

      {isInsideQueue && onRemoveClick && (
        <div
          className='flex self-center'
          onClick={() => {
            onRemoveClick(item);
          }}
        >
          ❌
        </div>
      )}
    </div>
  );
};

export default VideoItem;
