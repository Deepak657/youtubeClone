export interface IChannel {
  id: {
    channelId: string;
  };
  snippet: {
    country: string;
    customUrl: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    subscriberCount: string;
    viewCount: string;
  };
}

export interface IChannelData {
  key: string;
  value: IChannel[];
}
