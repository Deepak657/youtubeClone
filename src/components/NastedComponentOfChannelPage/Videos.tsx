import React, { useCallback, useEffect, useState } from "react";
import ChannelVideoCard from "../Cards/ChannelVideoCard";
import { fetchChannel, fetchPlayList } from "../../services/YoutubeService";
import { useParams } from "react-router-dom";

const Videos = () => {
  const { channelId } = useParams();
  const [channelVideos, setChannelVideos] = useState([]);

  const getChannel = useCallback(async () => {
    if (!channelId) {
      return;
    }
    try {
      const channel = await fetchChannel(channelId);
      const { uploads } = channel.contentDetails.relatedPlaylists;
      const uploadsVideo = await fetchPlayList(uploads);
      setChannelVideos(uploadsVideo);
      console.log(uploadsVideo);
    } catch (er) {
      console.log(er);
    }
  }, [channelId]);
  useEffect(() => {
    getChannel();
  }, [getChannel]);
  return (
    <div>
      <ChannelVideoCard />
    </div>
  );
};

export default Videos;
