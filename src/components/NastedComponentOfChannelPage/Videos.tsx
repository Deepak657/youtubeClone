import React, { useCallback, useEffect, useState } from "react";
import ChannelVideoCard from "../Cards/ChannelVideoCard";
import { fetchVideos } from "../../services/YoutubeService";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { videoFilter } from "../../Util";
import ButtonTab from "../Button/ButtonTab";

export interface IChannelVideos {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
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
const Videos = ({ onChange }: Iprops) => {
  const { channelId } = useParams();
  const [results, setResults] = useState(10);
  const [orderType, setOrderType] = useState("date");
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
      const videos = await fetchVideos({ results, orderType, channelId });
      setChannelVideos(videos);
    } catch (er) {
      console.log(er);
    }
  }, [channelId, results, orderType]);
  useEffect(() => {
    getChannel();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getChannel]);
  return (
    <>
      <ButtonWrapper>
        {videoFilter.map((tab) => {
          return (
            <ButtonTab
              key={tab.id}
              display={tab.display}
              value={tab.value}
              orderType={orderType}
              onClick={() => setOrderType(tab.value)}
            />
          );
        })}
      </ButtonWrapper>
      <VideosWrapper>
        {channelVideos.map((video: IChannelVideos, index) => {
          return (
            <ChannelVideoCard video={video} key={index} onChange={onChange} />
          );
        })}
      </VideosWrapper>
    </>
  );
};

export const VideosWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  align-items: center;
`;
export default Videos;
