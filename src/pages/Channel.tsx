import React, { useEffect, useCallback, useState } from "react";
import ChannelCard from "../components/Cards/ChannelCard";
import ChannelNavbar from "../components/Header/ChannelNavbar";
import { Outlet, useParams } from "react-router-dom";
import { Wrapper } from "./Home";
import { fetchChannel, fetchPlayList } from "../services/YoutubeService";
import { log } from "console";
import { ISearch } from "./SearchResults";

const Channel = () => {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState<ISearch>({
    id: {
      videoId: "",
      channelId: "",
    },
    snippet: {
      title: "",
      channelTitle: "",
      description: "",
      publishedAt: "",
      thumbnails: {
        default: {
          url: "",
        },
        high: {
          url: "",
        },
      },
    },
  });
  const getChannel = useCallback(async () => {
    if (!channelId) {
      return;
    }
    try {
      const channel = await fetchChannel(channelId);
      const { id, snippet } = channel;
      const { title, description, thumbnails } = snippet;
      setChannelDetails({
        id: {
          videoId: "",
          channelId: id,
        },
        snippet: {
          title: "",
          channelTitle: title,
          description: description,
          publishedAt: "",
          thumbnails: {
            default: {
              url: "",
            },
            high: {
              url: thumbnails.high.url,
            },
          },
        },
      });

      const { uploads } = channel.contentDetails.relatedPlaylists;
      const playList = await fetchPlayList(uploads);
      console.log(playList);
    } catch (er) {
      console.log(er);
    }
  }, [channelId]);
  useEffect(() => {
    getChannel();
  }, [getChannel]);
  return (
    <Wrapper>
      <ChannelCard channel={channelDetails} />
      <ChannelNavbar />
      <Outlet />
    </Wrapper>
  );
};

export default Channel;
