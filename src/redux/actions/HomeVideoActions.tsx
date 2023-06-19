import { IHomeVideoData } from "../../interfaces/video";
import { IVideoSearchParams } from "../../interfaces/videoSearchParams";

export const FETCH_HOME_VIDEO_START = "FETCH_HOME_VIDEO_START";

export interface FetchHomeVidoeStart {
  type: typeof FETCH_HOME_VIDEO_START;
  value: IVideoSearchParams;
}

export const fetchHomeVidoeStart = (
  value: IVideoSearchParams
): FetchHomeVidoeStart => {
  return {
    type: FETCH_HOME_VIDEO_START,
    value,
  };
};

export const FETCH_HOME_VIDEO_SUCCESS = "FETCH_HOME_VIDEO_SUCCESS";

export type FetchHomeVidoeSuccess = {
  type: typeof FETCH_HOME_VIDEO_SUCCESS;
  homeData: IHomeVideoData;
};

export const fetchHomeVidoeSuccess = (
  homeData: IHomeVideoData
): FetchHomeVidoeSuccess => {
  return {
    type: FETCH_HOME_VIDEO_SUCCESS,
    homeData,
  };
};

export const FETCH_HOME_VIDEO_FAIL = "FETCH_HOME_VIDEO_FAIL";

export type FetchHomeVideoFail = {
  type: typeof FETCH_HOME_VIDEO_FAIL;
  error: string;
};

export const fetchHomeVideoFail = (error: string): FetchHomeVideoFail => {
  return {
    type: FETCH_HOME_VIDEO_FAIL,
    error,
  };
};

export const CHANGE_TAB = "CHANGE_TAB";
export type ChangeTab = {
  type: typeof CHANGE_TAB;
  tab: string;
};

export const changeTab = (tab: string): ChangeTab => {
  return {
    type: CHANGE_TAB,
    tab,
  };
};

export type HomeVideosActions =
  | FetchHomeVidoeStart
  | FetchHomeVidoeSuccess
  | FetchHomeVideoFail
  | ChangeTab;
