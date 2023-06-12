import axios from "axios";
import { BaseUrl, YouTubeApiKey } from "../Const";
import { IVideoSearchParams } from "../interfaces/videoSearchParams";
import { ICommentParams } from "../interfaces/CommnetParam";

export const fetchVideos = async (videoParams: IVideoSearchParams) => {
  try {
    const res = await axios.get(`${BaseUrl}/search`, {
      params: {
        part: "snippet",
        maxResults: 10,
        key: YouTubeApiKey,
        ...videoParams,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
export const fetchComment = async (commentParams: ICommentParams) => {
  try {
    const res = await axios.get(`${BaseUrl}/commentThreads`, {
      params: {
        part: "snippet",
        maxResults: 10,
        key: YouTubeApiKey,
        ...commentParams,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const fetchChannel = async (channelID: string) => {
  try {
    const res = await axios.get(`${BaseUrl}/channels`, {
      params: {
        part: `snippet,contentDetails,statistics`,
        key: YouTubeApiKey,
        id: channelID,
      },
    });
    return res.data.items[0];
  } catch (err) {
    return err;
  }
};
export const fetchPlayList = async (playlistId: string) => {
  try {
    const res = await axios.get(`${BaseUrl}/playlistItems`, {
      params: {
        part: "snippet",
        maxResults: 10,
        key: YouTubeApiKey,
        playlistId: playlistId,
      },
    });
    return res.data.items;
  } catch (err) {
    return err;
  }
};

export const fetchWatchVideoChannel = async (id: string) => {
  try {
    const res = await axios.get(`${BaseUrl}/videos`, {
      params: {
        part: "snippet",
        key: YouTubeApiKey,
        id: id,
      },
    });
    return res.data.items[0].snippet;
  } catch (err) {
    return err;
  }
};
