import { createContext, Dispatch } from 'react';
import { IYtqState } from '../../types';

export const initialState: IYtqState = {
  searchQuery: '',
  currentVideo: null,
  searchText: '',
  searchResult: [],
  videoQueue: [],
  error: null,
};

const VideoContext = createContext<{ state: IYtqState; dispatch: Dispatch<any> }>({
  state: initialState,
  dispatch: () => null,
});

export default VideoContext;
