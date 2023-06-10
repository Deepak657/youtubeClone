import axios from "axios";
import { BaseUrl, YouTubeApiKey } from "../Const";

interface Iprops {
  results: number;
  term?: string;
  type?: string;
  orderType?: string;
  channelId?: string;
  eventType?: string;
  duration?: string;
}
export const fetchVideos = async ({
  results,
  term,
  type,
  orderType,
  channelId,
  eventType,
  duration,
}: Iprops) => {
  try {
    const res = await axios.get(`${BaseUrl}/search`, {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: results,
        key: YouTubeApiKey,
        q: term,
        type: type,
        order: orderType,
        channelId: channelId,
        eventType: eventType,
        videoDuration: duration,
        // videoType: type,
      },
    });
    return res.data.items;
  } catch (err) {
    return err;
  }
};

export const fetchComment = async (results: number, vId: string) => {
  try {
    const res = await axios.get(`${BaseUrl}/commentThreads`, {
      params: {
        part: "snippet",
        maxResults: results,
        key: YouTubeApiKey,
        videoId: vId,
      },
    });
    return res.data.items;
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
