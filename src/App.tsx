import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchResult from './components/video/SearchResult';
import VideoPlayer from './components/video/VideoPlayer';
import VideoQueue from './components/video/VideoQueue';
import VideoState from './context/video/video.state';

const App = () => {
  return (
    <VideoState>
      <div className='container'>
        <Navbar />
        {/* todo: search result and player might need to be just placed in a normal div and not inside  grid item*/}
        <div className='search-result'>
          <SearchResult />
          <VideoPlayer />
        </div>
        <div className='player'></div>

        <div className='queue'>
          <VideoQueue />
        </div>
      </div>
    </VideoState>
  );
};

export default App;
