import { IHomeCard } from "../../interfaces/video";
import {
  HomeVideosActions,
  FETCH_HOME_VIDEO_SUCCESS,
  FETCH_HOME_VIDEO_START,
  FETCH_HOME_VIDEO_FAIL,
  CHANGE_TAB,
} from "../actions/HomeVideoActions";

export interface HomeVideoState {
  homeVideos: Map<string, { nextPageToken: string; items: IHomeCard[] }>;
  error: string | null;
  loading: boolean;
  q: string;
}

const initialState = {
  homeVideos: new Map(),
  error: null,
  loading: false,
  q: "",
};

export const homeVideoReducer = (
  state: HomeVideoState = initialState,
  action: HomeVideosActions
): HomeVideoState => {
  switch (action.type) {
    case FETCH_HOME_VIDEO_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOME_VIDEO_SUCCESS:
      const {
        key,
        value: { items, nextPageToken },
      } = action.homeData;
      const videos = new Map(state.homeVideos);
      const existingData = videos.get(key);
      if (existingData) {
        const updatedData = {
          nextPageToken: nextPageToken,
          items: [...existingData.items, ...items],
        };
        videos.set(key, updatedData);
      } else {
        videos.set(key, { nextPageToken: nextPageToken, items: items });
      }
      return {
        ...state,
        loading: false,
        homeVideos: videos,
      };

    case FETCH_HOME_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case CHANGE_TAB:
      return {
        ...state,
        q: action.tab,
      };

    default:
      return state;
  }
};

export {};
