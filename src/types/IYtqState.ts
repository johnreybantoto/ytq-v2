import { IVideoItem } from '.';

export interface IYtqState {
  searchQuery: string;
  // IVideoItem
  currentVideo: IVideoItem | null;
  searchText: string;
  searchResult: IVideoItem[];
  videoQueue: IVideoItem[];
  error: null;
}
