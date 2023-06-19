import { IHomeVideoData } from "../../interfaces/video";
import { IVideoSearchParams } from "../../interfaces/videoSearchParams";

export const FETCH_SUGGESTION_VIDEO_START = "FETCH_SUGGESTION_VIDEO_START";

export interface FetchSuggestionVidoeStart {
  type: typeof FETCH_SUGGESTION_VIDEO_START;
  value: IVideoSearchParams;
}

export const fetchSuggestionVidoeStart = (
  value: IVideoSearchParams
): FetchSuggestionVidoeStart => {
  return {
    type: FETCH_SUGGESTION_VIDEO_START,
    value,
  };
};

export const FETCH_SUGGESTION_VIDEO_SUCCESS = "FETCH_SUGGESTION_VIDEO_SUCCESS";

export type FetchSuggestionVidoeSuccess = {
  type: typeof FETCH_SUGGESTION_VIDEO_SUCCESS;
  SuggestionData: IHomeVideoData;
};

export const fetchSuggestionVidoeSuccess = (
  SuggestionData: IHomeVideoData
): FetchSuggestionVidoeSuccess => {
  return {
    type: FETCH_SUGGESTION_VIDEO_SUCCESS,
    SuggestionData,
  };
};

export const FETCH_SUGGESTION_VIDEO_FAIL = "FETCH_SUGGESTION_VIDEO_FAIL";

export type FetchSuggestionVideoFail = {
  type: typeof FETCH_SUGGESTION_VIDEO_FAIL;
  error: string;
};

export const fetchSuggestionVideoFail = (
  error: string
): FetchSuggestionVideoFail => {
  return {
    type: FETCH_SUGGESTION_VIDEO_FAIL,
    error,
  };
};

// export const CHANGE_TAB = "CHANGE_TAB";
// export type ChangeTab = {
//   type: typeof CHANGE_TAB;
//   tab: string;
// };

// export const changeTab = (tab: string): ChangeTab => {
//   return {
//     type: CHANGE_TAB,
//     tab,
//   };
// };

export type SuggestionVideosActions =
  | FetchSuggestionVidoeStart
  | FetchSuggestionVidoeSuccess
  | FetchSuggestionVideoFail;
//   | ChangeTab;
