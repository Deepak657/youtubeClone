import axios from "axios";
import { YouTubeApiKey, BaseUrl } from "../Const";
import { IVideoSearchParams } from "../interfaces/videoSearchParams";
import { ICommentParams } from "../interfaces/CommnetParam";
import { IChannelParams } from "../interfaces/channelParams";

export const fetchVideos = async (videoParams: IVideoSearchParams) => {
  try {
    const res = await axios.get(`${BaseUrl}/search`, {
      params: {
        part: "snippet",
        maxResults: 20,
        key: YouTubeApiKey,
        ...videoParams,
      },
    });

    const videosData = {
      key: videoParams.q,
      value: res.data,
    };
    return videosData;
  } catch (err) {
    return err;
  }
};

export const fetchSuggestionVideos = async (
  videoParams: IVideoSearchParams
) => {
  try {
    const res = await axios.get(`${BaseUrl}/search`, {
      params: {
        part: "snippet",
        maxResults: 20,
        key: YouTubeApiKey,
        ...videoParams,
      },
    });

    const videosData = {
      key: videoParams.relatedToVideoId,
      value: res.data,
    };
    return videosData;
  } catch (err) {
    return err;
  }
};

export const fetchComment = async (commentParams: ICommentParams) => {
  try {
    const res = await axios.get(`${BaseUrl}/commentThreads`, {
      params: {
        part: "snippet",
        maxResults: 20,
        key: YouTubeApiKey,
        ...commentParams,
      },
    });

    const commentData = {
      key: commentParams.videoId,
      value: res.data,
    };
    return commentData;
  } catch (err) {
    return err;
  }
};

export const fetchChannel = async (channelParam: IChannelParams) => {
  try {
    const res = await axios.get(`${BaseUrl}/channels`, {
      params: {
        part: `snippet,contentDetails,statistics`,
        key: YouTubeApiKey,
        ...channelParam,
      },
    });
    const channelData = {
      key: channelParam.id,
      value: res.data.items,
    };
    return channelData;
  } catch (err) {
    return err;
  }
};

export const fetchChannelVideos = async (
  channelVideoParams: IVideoSearchParams
) => {
  try {
    const res = await axios.get(`${BaseUrl}/search`, {
      params: {
        part: "snippet",
        maxResults: 20,
        key: YouTubeApiKey,
        ...channelVideoParams,
      },
    });

    const videosData = {
      key: `${channelVideoParams.channelId}${channelVideoParams.order}`,
      value: res.data,
    };
    return videosData;
  } catch (err) {
    return err;
  }
};

// export const fetchWatchVideoChannel = async (id: string) => {
//   try {
//     const res = await axios.get(`${BaseUrl}/videos`, {
//       params: {
//         part: "snippet",
//         key: YouTubeApiKey,
//         id: id,
//       },
//     });
//     return res.data.items[0].snippet;
//   } catch (err) {
//     return err;
//   }
// };

// export const fetchPlayList = async (playlistId: string) => {
//   try {
//     const res = await axios.get(`${BaseUrl}/playlistItems`, {
//       params: {
//         part: "snippet",
//         maxResults: 10,
//         key: YouTubeApiKey,
//         playlistId: playlistId,
//       },
//     });
//     return res.data.items;
//   } catch (err) {
//     return err;
//   }
// };
