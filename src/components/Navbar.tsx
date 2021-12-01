import React, { useState } from 'react';
import Search from './Search';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className='navbar flex'>
      <div className='flex-auto'>
        <Search />
      </div>
      <div>
        <button className='inline align-middle m-5 p-3 bg-gray-400 hover:bg-gray-200 rounded-xl' onClick={onOpenModal}>
          ❔
        </button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h4>This YouTube Queue Web App is created primarily for Karaoke use</h4>
        <h5>Recommended setup:</h5>
        <div>
          <ol className='m-5 list-decimal'>
            <li>Use Firefox browser to allow picture in picture to be scaled to full screen</li>
            <li>Connect PC to secondary screen (TV,Monitor,Projector)</li>
            <li>Connect PC to speaker </li>
            <li>Search for a song</li>
            <li>Add song to queue by clicking the thumbnail</li>
            <li>Reorder, remove, skip song as they appear in the "Queue" column</li>
            <li>When a video is playing, hold Shift then right click the video</li>
            <li>Select "Picture-in-Picture"</li>
            <li>Drag the window to the secondary screen and resize</li>
          </ol>
          <br />
          <h5>This site uses YouTube API for searches, by using this you agree to </h5>
          <ul>
            <li>
              <a href='https://www.youtube.com/t/terms'>YouTube Terms of Service</a>
            </li>
            <li>
              <a href='http://www.google.com/policies/privacy'>Google Privacy Policy</a>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
