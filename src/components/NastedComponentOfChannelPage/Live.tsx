import React, { useCallback, useEffect, useState } from "react";
import ChannelVideoCard from "../Cards/ChannelVideoCard";
import { fetchVideo } from "../../services/YoutubeService";
import { useParams } from "react-router-dom";
import { VideosWrapper } from "./Videos";

export interface IChannelVideos {
  snippet: {
    resourceId: {
      videoId: string;
    };
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

interface Iprops {
  onChange: (value: string) => void;
}
const Live = ({ onChange }: Iprops) => {
  const { channelId } = useParams();
  const [results, setResults] = useState(10);
  const [channelVideos, setChannelVideos] = useState<IChannelVideos[]>([]);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setResults((prev) => prev + 10);
    }
  };

  const getChannel = useCallback(async () => {
    if (!channelId) {
      return;
    }
    try {
      const video = await fetchVideo({
        results,
        channelId,
        tab: "video",
        eventType: "live",
      });
      // setChannelVideos(video);
      console.log(video);
    } catch (er) {
      console.log(er);
    }
  }, [channelId, results]);
  useEffect(() => {
    getChannel();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getChannel]);
  return (
    <>
      <VideosWrapper>
        {/* {channelVideos.map((video: IChannelVideos, index) => {
          return (
            <ChannelVideoCard video={video} key={index} onChange={onChange} />
          );
        })} */}
      </VideosWrapper>
    </>
  );
};

export default Live;
