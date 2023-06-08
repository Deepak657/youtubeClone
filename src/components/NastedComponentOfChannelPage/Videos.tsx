import React, { useCallback, useEffect } from "react";
import ChannelVideoCard from "../Cards/ChannelVideoCard";
import { fetchChannel, fetchPlayList } from "../../services/YoutubeService";

const Videos = () => {
  // const getChannel = useCallback(async () => {
  //   if (!channelId) {
  //     return;
  //   }
  //   try {
  //     const channel = await fetchChannel(channelId);
  //     const { uploads } = channel.contentDetails.relatedPlaylists;
  //     const playList = await fetchPlayList(uploads);
  //     console.log(playList);
  //   } catch (er) {
  //     console.log(er);
  //   }
  // }, [channelId]);
  // useEffect(() => {
  //   getChannel();
  // }, [getChannel]);
  return (
    <div>
      <ChannelVideoCard />
    </div>
  );
};

export default Videos;
