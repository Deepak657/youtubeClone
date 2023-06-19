import React, { useCallback, useEffect, useState } from "react";
import ChannelVideoCard from "../Cards/ChannelVideoCard";
import { useParams } from "react-router-dom";
import { VideosWrapper } from "./Videos";
import { IVideoSearchParams } from "../../interfaces/videoSearchParams";

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

const Live = () => {
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

  // const getVideos = useCallback(async (value: IVideoSearchParams) => {
  //   try {
  //     const video = await fetchVideos(value);
  //     // setChannelVideos(video);
  //     console.log(video);
  //   } catch (er) {
  //     console.log(er);
  //   }
  // }, []);
  // useEffect(() => {
  //   getVideos({ channelId: channelId, type: "video", eventType: "live" });
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [getVideos, channelId]);
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
