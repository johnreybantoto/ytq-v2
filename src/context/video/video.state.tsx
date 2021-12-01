import React, { useContext, useReducer } from 'react';
import videoReducer from './video.reducer';
import VideoContext, { initialState } from './video.context';
import { search } from '../../services';
import {
  ADD_TO_QUEUE,
  REMOVE_FROM_QUEUE,
  SET_CURRENT,
  SET_ERROR,
  SET_VIDEO_QUEUE,
  SET_VIDEO_SEARCH_LIST,
} from '../types';
import { IVideoItem } from '../../types';

export const searchVideo = async (dispatch: any, searchText: string) => {
  const data = await search(searchText);
  try {
    dispatch({
      type: SET_VIDEO_SEARCH_LIST,
      payload: { searchText, data },
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: 'Problem with search',
    });
  }
};

export const setCurrent = (dispatch: any, item: IVideoItem) => {
  dispatch({ type: SET_CURRENT, payload: item });
};

export const addToQueue = (dispatch: any, item: IVideoItem) => {
  dispatch({ type: ADD_TO_QUEUE, payload: item });
};

export const removeFromQueue = (dispatch: any, item: IVideoItem) => {
  dispatch({ type: REMOVE_FROM_QUEUE, payload: item });
};

export const setQueue = (dispatch: any, items: IVideoItem[]) => {
  dispatch({ type: SET_VIDEO_QUEUE, payload: items });
};

export const useVideo = () => {
  const { state, dispatch } = useContext(VideoContext);

  return [state, dispatch];
};

const VideoState = (props: any) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  return <VideoContext.Provider value={{ state, dispatch }}> {props.children}</VideoContext.Provider>;
};

export default VideoState;
