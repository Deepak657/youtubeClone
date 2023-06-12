// export interface IVideo {
//     id: {
//       videoId: string;
//       channelId: string;
//     };
//     snippet: {
//       channelId: string;
//       title: string;
//       channelTitle: string;
//       description: string;
//       publishedAt: string;
//       thumbnails: {
//         default: {
//           url: string;
//         };
//         high: {
//           url: string;
//         };
//       };
//     };
//   }
  


  export interface IHomeCard {
    id: {
      videoId: string;
    };
    snippet: {
      channelId: string;
      title: string;
      channelTitle: string;
      publishedAt: string;
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