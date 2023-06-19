import { ICommentParams } from "../../interfaces/CommnetParam";
import { ICommentData } from "../../interfaces/comment";

export const FETCH_COMMENT_START = "FETCH_COMMENT_START";

export interface FetchCommentStart {
  type: typeof FETCH_COMMENT_START;
  value: ICommentParams;
}

export const fetchCommentStart = (value: ICommentParams): FetchCommentStart => {
  return {
    type: FETCH_COMMENT_START,
    value,
  };
};

export const FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS";

export type FetchCommentSuccess = {
  type: typeof FETCH_COMMENT_SUCCESS;
  commentData: ICommentData;
};

export const fetchCommentSuccess = (
  commentData: ICommentData
): FetchCommentSuccess => {
  return {
    type: FETCH_COMMENT_SUCCESS,
    commentData,
  };
};

export const FETCH_COMMENT_FAIL = "FETCH_COMMENT_FAIL";

export type FetchCommentFail = {
  type: typeof FETCH_COMMENT_FAIL;
  error: string;
};

export const fetchCommentFail = (error: string): FetchCommentFail => {
  return {
    type: FETCH_COMMENT_FAIL,
    error,
  };
};

export type CommentActions =
  | FetchCommentStart
  | FetchCommentSuccess
  | FetchCommentFail;
