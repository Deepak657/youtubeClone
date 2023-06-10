import React, { useEffect, useCallback, useState } from "react";
import ChannelCard from "../components/Cards/ChannelCard";
import ChannelNavbar from "../components/Header/ChannelNavbar";
import { Outlet, useParams } from "react-router-dom";
import { Wrapper } from "./Home";
import { fetchChannel } from "../services/YoutubeService";
import { ISearch } from "./SearchResults";

const Channel = () => {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState<ISearch>({
    id: {
      videoId: "",
      channelId: "",
    },
    snippet: {
      channelId: "",
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
          channelId: "",
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
