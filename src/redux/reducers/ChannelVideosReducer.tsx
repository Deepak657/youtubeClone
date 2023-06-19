import { IHomeCard } from "../../interfaces/video";
import {
  ChannelVideosActions,
  FETCH_CHANNEL_VIDEO_FAIL,
  FETCH_CHANNEL_VIDEO_START,
  FETCH_CHANNEL_VIDEO_SUCCESS,
} from "../actions/ChannelVideosAction";

export interface ChannelVideoState {
  channelVideos: Map<string, { nextPageToken: string; items: IHomeCard[] }>;
  error: string | null;
  loading: boolean;
}

const initialState = {
  channelVideos: new Map(),
  error: null,
  loading: false,
};

export const channelVideoReducer = (
  state: ChannelVideoState = initialState,
  action: ChannelVideosActions
): ChannelVideoState => {
  switch (action.type) {
    case FETCH_CHANNEL_VIDEO_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHANNEL_VIDEO_SUCCESS:
      const {
        key,
        value: { items, nextPageToken },
      } = action.channelData;
      const videos = new Map(state.channelVideos);
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
        channelVideos: videos,
      };

    case FETCH_CHANNEL_VIDEO_FAIL:
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
