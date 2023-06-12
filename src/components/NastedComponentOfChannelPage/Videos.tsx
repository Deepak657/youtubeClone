import React, { useCallback, useEffect, useState } from "react";
import ChannelVideoCard from "../Cards/ChannelVideoCard";
import { fetchVideos } from "../../services/YoutubeService";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { videoFilter } from "../../Util";
import ButtonTab from "../Button/ButtonTab";
import { IVideoSearchParams } from "../../interfaces/videoSearchParams";

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
  const [savePageToken, setSavePageToken] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");
  const [orderType, setOrderType] = useState("date");
  const [channelVideos, setChannelVideos] = useState<IChannelVideos[]>([]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setNextPageToken(savePageToken);
    }
  }, [setNextPageToken, savePageToken]);

  const handleClick = (value: string) => {
    setChannelVideos([]);
    setOrderType(value);
  };
  const getVideos = useCallback(async (value: IVideoSearchParams) => {
    try {
      const data = await fetchVideos(value);
      const { nextPageToken, items } = data;
      setSavePageToken(nextPageToken);
      setChannelVideos((prev) => [...prev, ...items]);
    } catch (er) {
      console.log(er);
    }
  }, []);
  useEffect(() => {
    getVideos({
      order: orderType,
      channelId: channelId,
      pageToken: nextPageToken,
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getVideos, orderType, channelId, nextPageToken, handleScroll]);
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
              onClick={() => handleClick(tab.value)}
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
