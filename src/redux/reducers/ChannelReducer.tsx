import { IChannel } from "../../interfaces/channels";
import {
  ChannelActions,
  FETCH_CHANNEL_FAIL,
  FETCH_CHANNEL_START,
  FETCH_CHANNEL_SUCCESS,
} from "../actions/ChannelAction";

export interface ChannelState {
  channel: Map<string, IChannel[]>;
  error: string | null;
  loading: boolean;
}

const initialState = {
  channel: new Map(),
  error: null,
  loading: false,
};

export const channelReducer = (
  state: ChannelState = initialState,
  action: ChannelActions
): ChannelState => {
  switch (action.type) {
    case FETCH_CHANNEL_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHANNEL_SUCCESS:
      const { key, value } = action.channelData;
      const copyChannel = new Map(state.channel);
      copyChannel.set(key, value);
      return {
        ...state,
        loading: false,
        channel: copyChannel,
      };
    case FETCH_CHANNEL_FAIL:
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
