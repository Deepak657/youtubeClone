import { IHomeCard } from "../../interfaces/video";

import {
  FETCH_SUGGESTION_VIDEO_FAIL,
  FETCH_SUGGESTION_VIDEO_START,
  FETCH_SUGGESTION_VIDEO_SUCCESS,
  SuggestionVideosActions,
} from "../actions/SuggestionVideoActions";

export interface SuggestionVideoState {
  suggetionVideos: Map<string, { nextPageToken: string; items: IHomeCard[] }>;

  error: string | null;
  loading: boolean;
}

const initialState = {
  suggetionVideos: new Map(),
  error: null,
  loading: false,
};

export const suggestionVideoReducer = (
  state: SuggestionVideoState = initialState,
  action: SuggestionVideosActions
): SuggestionVideoState => {
  switch (action.type) {
    case FETCH_SUGGESTION_VIDEO_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUGGESTION_VIDEO_SUCCESS:
      const {
        key,
        value: { nextPageToken, items },
      } = action.SuggestionData;

      const videos = new Map(state.suggetionVideos);
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
        suggetionVideos: videos,
      };
    case FETCH_SUGGESTION_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export {};
