import { Icomment } from "../../interfaces/comment";
import {
  CommentActions,
  FETCH_COMMENT_FAIL,
  FETCH_COMMENT_START,
  FETCH_COMMENT_SUCCESS,
} from "../actions/CommentAction";

export interface CommentState {
  comments: Map<string, { nextPageToken: string; items: Icomment[] }>;
  error: string | null;
  loading: boolean;
}

const initialState = {
  comments: new Map(),
  error: null,
  loading: false,
};

export const commentReducer = (
  state: CommentState = initialState,
  action: CommentActions
): CommentState => {
  switch (action.type) {
    case FETCH_COMMENT_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENT_SUCCESS:
      const {
        key,
        value: { nextPageToken, items },
      } = action.commentData;

      const copyComment = new Map(state.comments);
      const existingData = copyComment.get(key);
      if (existingData) {
        const updatedData = {
          nextPageToken: nextPageToken,
          items: [...existingData.items, ...items],
        };
        copyComment.set(key, updatedData);
      } else {
        copyComment.set(key, { nextPageToken: nextPageToken, items: items });
      }

      return {
        ...state,
        loading: false,
        comments: copyComment,
      };
    case FETCH_COMMENT_FAIL:
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
