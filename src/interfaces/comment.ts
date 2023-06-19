export interface Icomment {
  id: string;
  snippet: {
    topLevelComment: {
      snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        textDisplay: string;
        likeCount: number;
        publishedAt: string;
      };
    };
  };
}

export interface ICommentData {
  key: string;
  value: {
    nextPageToken: string;
    items: Icomment[];
  };
}
