import axios from "axios";
import { YoutubeApi } from "../../Const";

interface Iprops {
  results: number;
  term?: string;
}
export const fetchVideo = async ({ results, term }: Iprops) => {
  try {
    const res = await axios.get(`${YoutubeApi}/search`, {
      params: {
        part: "snippet",
        maxResults: results,
        chart: "mostPopular",
        key: "AIzaSyBaNi-MTp8i3RyR0Kr34b2FFtxPWW7jXe4",
        q: term,
      },
    });
    return res.data.items;
  } catch (err) {
    return err;
  }
};
