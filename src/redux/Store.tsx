import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { useSelector, shallowEqual } from "react-redux";
import rootSaga from "./Sagas";
import { HomeVideoState, homeVideoReducer } from "./reducers/HomeVideoReducers";
import {
  suggestionVideoReducer,
  SuggestionVideoState,
} from "./reducers/SuggestionReducer";
import { CommentState, commentReducer } from "./reducers/CommentReducer";
import { ChannelState, channelReducer } from "./reducers/ChannelReducer";
import {
  ChannelVideoState,
  channelVideoReducer,
} from "./reducers/ChannelVideosReducer";

const sagaMiddleware = createSagaMiddleware();

export const useGSelector = <Selected = unknown,>(
  selector: (state: Store) => Selected
): Selected => useSelector(selector, shallowEqual);

export interface Store {
  data: HomeVideoState;
  suggestionData: SuggestionVideoState;
  commentData: CommentState;
  channelData: ChannelState;
  channelVideoData: ChannelVideoState;
}

const rootReducer = combineReducers({
  data: homeVideoReducer,
  suggestionData: suggestionVideoReducer,
  commentData: commentReducer,
  channelData: channelReducer,
  channelVideoData: channelVideoReducer,
});

const middleware: any = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
