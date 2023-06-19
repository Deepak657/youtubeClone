import { call, put, all, fork, takeLatest } from "redux-saga/effects";

import {
  fetchChannel,
  fetchChannelPlaylist,
  fetchChannelVideos,
  fetchComment,
  fetchSuggestionVideos,
  fetchVideos,
} from "./Api";
import {
  FETCH_HOME_VIDEO_START,
  fetchHomeVideoFail,
  fetchHomeVidoeSuccess,
} from "./actions/HomeVideoActions";
import { IHomeVideoData } from "../interfaces/video";
import {
  FETCH_SUGGESTION_VIDEO_START,
  fetchSuggestionVideoFail,
  fetchSuggestionVidoeSuccess,
} from "./actions/SuggestionVideoActions";
import {
  FETCH_COMMENT_START,
  fetchCommentFail,
  fetchCommentSuccess,
} from "./actions/CommentAction";
import { ICommentData } from "../interfaces/comment";
import { IChannelData } from "../interfaces/channels";
import {
  FETCH_CHANNEL_START,
  fetchChannelFail,
  fetchChannelSuccess,
} from "./actions/ChannelAction";
import {
  FETCH_CHANNEL_VIDEO_START,
  fetchChannelVideoFail,
  fetchChannelVidoeSuccess,
} from "./actions/ChannelVideosAction";

////////////////////homeVideos

function* onLoadHomeVideoAsync({ value }: any) {
  try {
    const res: IHomeVideoData = yield call(fetchVideos, value);
    yield put(fetchHomeVidoeSuccess(res));
  } catch (error) {
    yield put(fetchHomeVideoFail("error"));
  }
}

export function* onLoadHomeVideo() {
  yield takeLatest(FETCH_HOME_VIDEO_START, onLoadHomeVideoAsync);
}

///////////////Suggestion Video.

function* onLoadSuggestionVideoAsync({ value }: any) {
  try {
    const res: IHomeVideoData = yield call(fetchSuggestionVideos, value);
    yield put(fetchSuggestionVidoeSuccess(res));
  } catch (error) {
    yield put(fetchSuggestionVideoFail("error"));
  }
}

export function* onLoadSuggestionVideo() {
  yield takeLatest(FETCH_SUGGESTION_VIDEO_START, onLoadSuggestionVideoAsync);
}

//////////comments.

function* onLoadCommentAsync({ value }: any) {
  try {
    const res: ICommentData = yield call(fetchComment, value);
    yield put(fetchCommentSuccess(res));
  } catch (error) {
    yield put(fetchCommentFail("error"));
  }
}

export function* onLoadComment() {
  yield takeLatest(FETCH_COMMENT_START, onLoadCommentAsync);
}

///////////Channel

function* onLoadChannelAsync({ value }: any) {
  try {
    const res: IChannelData = yield call(fetchChannel, value);
    yield put(fetchChannelSuccess(res));
  } catch (error) {
    yield put(fetchChannelFail("error"));
  }
}

export function* onLoadChannel() {
  yield takeLatest(FETCH_CHANNEL_START, onLoadChannelAsync);
}

////////////channelVideos

function* onLoadChannelVideosAsync({ value }: any) {
  try {
    const res: IHomeVideoData = yield call(fetchChannelVideos, value);
    yield put(fetchChannelVidoeSuccess(res));
  } catch (error) {
    yield put(fetchChannelVideoFail("error"));
  }
}

export function* onLoadChannelVideos() {
  yield takeLatest(FETCH_CHANNEL_VIDEO_START, onLoadChannelVideosAsync);
}

/////////////////channelPlaylist

// function* onLoadChannelPlaylistVideosAsync({ value }: any) {
//   try {
//     const res: IHomeVideoData = yield call(fetchChannelPlaylist, value);
//     yield put(fetchChannelVidoeSuccess(res));
//   } catch (error) {
//     yield put(fetchChannelVideoFail("error"));
//   }
// }

// export function* onLoadChannelPlaylistVideos() {
//   yield takeLatest(FETCH_CHANNEL_VIDEO_START, onLoadChannelPlaylistVideosAsync);
// }

const HomeVideoSaga = [
  fork(onLoadHomeVideo),
  fork(onLoadSuggestionVideo),
  fork(onLoadComment),
  fork(onLoadChannel),
  fork(onLoadChannelVideos),
];
export default function* rootSaga() {
  yield all([...HomeVideoSaga]);
}
