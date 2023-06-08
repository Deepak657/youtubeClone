import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical, BsDot } from "react-icons/bs";

import { theme } from "../../Theme";
import { Views } from "./HomeCard";
import { Image } from "./PlayListCard";
import { IChannelVideos } from "../NastedComponentOfChannelPage/Videos";
import { useNavigate } from "react-router-dom";
import { convertToRelativeTime } from "../../services/YoutubeService";

interface Iprops {
  video: IChannelVideos;
  onChange: (value: string) => void;
}
const ChannelVideoCard = ({ video, onChange }: Iprops) => {
  const navigate = useNavigate();
  const { id, snippet } = video;
  const { title, publishedAt, thumbnails } = snippet;
  const handleChange = (id: string, title: string) => {
    navigate(`/video/${id}`);
    onChange(title);
  };
  return (
    <ChannelVideoCardWrapper onClick={() => handleChange(id.videoId, title)}>
      <Image src={thumbnails.high.url} alt="" />
      <TitleWrapper>
        <Title>{title}</Title>
        <BsThreeDotsVertical2 />
      </TitleWrapper>
      <Views>
        {Math.floor(Math.random() * 100 + 1)}M Views{" "}
        <span>
          <BsDot />
        </span>
        {convertToRelativeTime(publishedAt)}
      </Views>
    </ChannelVideoCardWrapper>
  );
};

const ChannelVideoCardWrapper = styled.div`
  width: 300px;
  cursor: pointer;
`;

export const BsThreeDotsVertical2 = styled(BsThreeDotsVertical)`
  color: ${theme.color.white};
  font-size: 18px;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const Title = styled.p`
  width: 75%;
  line-height: 1.5;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${theme.color.white};
`;

export default ChannelVideoCard;
