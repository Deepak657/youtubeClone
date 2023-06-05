import axios from "axios";
import { YoutubeApi } from "../Const";

interface Iprops {
  results: number;
  term?: string;
}
export const fetchVideo = async ({ results, term }: Iprops) => {
  try {
    const res = await axios.get(`${YoutubeApi}/search`, {
      params: {
        part: "snippet",
        chart: "mostPopular",
        key: "AIzaSyAoAGjukxjbOEXBc1fQDewX5W3wgmfXQQE",
        q: term,
      },
    });
    return res.data.items;
  } catch (err) {
    return err;
  }
};
