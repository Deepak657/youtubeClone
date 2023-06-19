import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical, BsDot } from "react-icons/bs";

import { theme } from "../../Theme";
import { Views } from "./HomeCard";
import { Image } from "./PlayListCard";
import { Link } from "react-router-dom";
import moment from "moment";
import { IHomeCard } from "../../interfaces/video";

interface Iprops {
  video: IHomeCard;
}
const ChannelVideoCard = ({ video }: Iprops) => {
  const { id, snippet } = video;
  const { title, publishedAt, thumbnails } = snippet;
  return (
    <ChannelVideoCardWrapper
      to={`/video/${id.videoId}`}
      state={{ videoDetails: video }}
    >
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
        {moment(publishedAt).fromNow()}
      </Views>
    </ChannelVideoCardWrapper>
  );
};

const ChannelVideoCardWrapper = styled(Link)`
  width: 300px;
  text-decoration: none;
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
