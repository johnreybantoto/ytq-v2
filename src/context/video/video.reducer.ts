import { IYtqState } from '../../types';
import {
  SET_VIDEO_SEARCH_LIST,
  SET_VIDEO_QUEUE,
  SET_CURRENT,
  SET_ERROR,
  ADD_TO_QUEUE,
  REMOVE_FROM_QUEUE,
} from '../types';

interface IAction {
  type: string;
  payload: any;
}

const videoReducer = (state: IYtqState, action: IAction): IYtqState => {
  switch (action.type) {
    case SET_VIDEO_SEARCH_LIST:
      return {
        ...state,
        searchResult: action.payload.data,
        searchText: action.payload.searchText,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_VIDEO_QUEUE:
      return {
        ...state,
        videoQueue: action.payload,
      };
    case ADD_TO_QUEUE:
      return {
        ...state,
        videoQueue: [...state.videoQueue, action.payload],
      };
    case REMOVE_FROM_QUEUE:
      return {
        ...state,
        videoQueue: state.videoQueue.filter((x) => x.id !== action.payload.id),
      };
    case SET_CURRENT:
      return {
        ...state,
        currentVideo: action.payload,
        videoQueue: state.videoQueue.map((x) => {
          return { ...x, isCurrent: x.id === action.payload.id };
        }),
      };
    default:
      return state;
  }
};

export default videoReducer;
