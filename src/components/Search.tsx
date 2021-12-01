import React, { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import VideoContext from '../context/video/video.context';
import { searchVideo } from '../context/video/video.state';

const Search = () => {
  const { dispatch } = useContext(VideoContext);

  const [addKaraoke, setAddKaraoke] = useState(false);

  const searchRef = React.createRef<HTMLInputElement>();

  const search = () => {
    if (searchRef.current) {
      const searchText = `${searchRef.current.value}${addKaraoke ? ' karaoke' : ''}`;
      searchVideo(dispatch, searchText);
    }
  };

  const toggleKaraoke = (event: ChangeEvent<HTMLInputElement>) => {
    setAddKaraoke(event.target.checked);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  return (
    <div className='m-5 text-center'>
      <input
        ref={searchRef}
        onKeyDown={handleKeyDown}
        type='text'
        className='w-80 p-2 m-2 text-left appearance-none  bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
      />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        onClick={search}
      >
        🔍 Search
      </button>
      <input className='align-middle ml-5' checked={addKaraoke} onChange={toggleKaraoke} type='checkbox' /> Add
      "Karaoke"
    </div>
  );
};

export default Search;
