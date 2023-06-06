import axios from "axios";
import { BaseUrl, YouTubeApiKey } from "../Const";

interface Iprops {
  results: number;
  term?: string;
}
export const fetchVideo = async ({ results, term }: Iprops) => {
  try {
    const res = await axios.get(`${BaseUrl}/search`, {
      params: {
        part: "snippet",
        maxResults: results,
        chart: "mostPopular",
        key: YouTubeApiKey,
        q: term,
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
