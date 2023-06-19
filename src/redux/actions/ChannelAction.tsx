import { IChannelParams } from "../../interfaces/channelParams";
import { IChannelData } from "../../interfaces/channels";

export const FETCH_CHANNEL_START = "FETCH_CHANNEL_START";

export interface FetchChannelStart {
  type: typeof FETCH_CHANNEL_START;
  value: IChannelParams;
}

export const fetchChannelStart = (value: IChannelParams): FetchChannelStart => {
  return {
    type: FETCH_CHANNEL_START,
    value,
  };
};

export const FETCH_CHANNEL_SUCCESS = "FETCH_CHANNEL_SUCCESS";

export type FetchChannelSuccess = {
  type: typeof FETCH_CHANNEL_SUCCESS;
  channelData: IChannelData;
};

export const fetchChannelSuccess = (
  channelData: IChannelData
): FetchChannelSuccess => {
  return {
    type: FETCH_CHANNEL_SUCCESS,
    channelData,
  };
};

export const FETCH_CHANNEL_FAIL = "FETCH_CHANNEL_FAIL";

export type FetchChannelFail = {
  type: typeof FETCH_CHANNEL_FAIL;
  error: string;
};

export const fetchChannelFail = (error: string): FetchChannelFail => {
  return {
    type: FETCH_CHANNEL_FAIL,
    error,
  };
};

export type ChannelActions =
  | FetchChannelStart
  | FetchChannelSuccess
  | FetchChannelFail;
