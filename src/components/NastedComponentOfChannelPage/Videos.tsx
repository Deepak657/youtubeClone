import React, { useEffect, useState } from "react";
import ChannelVideoCard from "../Cards/ChannelVideoCard";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { videoFilter } from "../../Util";
import ButtonTab from "../Button/ButtonTab";
import { fetchChannelVidoeStart } from "../../redux/actions/ChannelVideosAction";
import { useDispatch } from "react-redux";
import { useGSelector } from "../../redux/Store";

const Videos = () => {
  const [orderType, setOrderType] = useState("date");
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const { channelVideos } = useGSelector((state) => state.channelVideoData);

  const channel = channelVideos.get(`${channelId}${orderType}`);

  // console.log(channel);

  const handleClick = (value: string) => {
    setOrderType(value);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      dispatch(
        fetchChannelVidoeStart({
          order: orderType,
          channelId: channelId,
          pageToken: channel?.nextPageToken,
        })
      );
    }
  };
  useEffect(() => {
    if (channelVideos.has(`${channelId}${orderType}`)) {
      return;
    }

    dispatch(
      fetchChannelVidoeStart({
        order: orderType,
        channelId: channelId,
      })
    );
  }, [orderType, channelId, channelVideos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
        {channel?.items.map((video, index) => {
          return <ChannelVideoCard video={video} key={index} />;
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
