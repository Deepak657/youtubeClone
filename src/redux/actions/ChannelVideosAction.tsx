import { IHomeVideoData } from "../../interfaces/video";
import { IVideoSearchParams } from "../../interfaces/videoSearchParams";

export const FETCH_CHANNEL_VIDEO_START = "FETCH_CHANNEL_VIDEO_START";

export interface FetchChannelVidoeStart {
  type: typeof FETCH_CHANNEL_VIDEO_START;
  value: IVideoSearchParams;
}

export const fetchChannelVidoeStart = (
  value: IVideoSearchParams
): FetchChannelVidoeStart => {
  return {
    type: FETCH_CHANNEL_VIDEO_START,
    value,
  };
};

export const FETCH_CHANNEL_VIDEO_SUCCESS = "FETCH_CHANNEL_VIDEO_SUCCESS";

export type FetchChannelVidoeSuccess = {
  type: typeof FETCH_CHANNEL_VIDEO_SUCCESS;
  channelData: IHomeVideoData;
};

export const fetchChannelVidoeSuccess = (
  channelData: IHomeVideoData
): FetchChannelVidoeSuccess => {
  return {
    type: FETCH_CHANNEL_VIDEO_SUCCESS,
    channelData,
  };
};

export const FETCH_CHANNEL_VIDEO_FAIL = "FETCH_CHANNEL_VIDEO_FAIL";

export type FetchChannelVideoFail = {
  type: typeof FETCH_CHANNEL_VIDEO_FAIL;
  error: string;
};

export const fetchChannelVideoFail = (error: string): FetchChannelVideoFail => {
  return {
    type: FETCH_CHANNEL_VIDEO_FAIL,
    error,
  };
};

export type ChannelVideosActions =
  | FetchChannelVidoeStart
  | FetchChannelVidoeSuccess
  | FetchChannelVideoFail;
