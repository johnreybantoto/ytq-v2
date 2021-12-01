export interface IVideoItem {
  id: string;
  videoId: string;
  snippet: {
    thumbnails: {
      default: {
        url: string;
      };
    };
    title: string;
    publishedAt: string;
  };
  humanizedTime: string;
  isPlayed: boolean;
  key: string;
  isCurrent: boolean;
}
