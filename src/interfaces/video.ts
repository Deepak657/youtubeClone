export interface IHomeCard {
  id: {
    videoId: string;
    channelId?: string;
  };
  snippet: {
    channelId: string;
    title: string;
    channelTitle: string;
    publishedAt: string;
    description?: string;

    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
}

export interface IhomeData {
  nextPageToken: string;
  items: IHomeCard[];
}

export interface IHomeVideoData {
  key: string;
  value: IhomeData;
}
