import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical, BsDot } from "react-icons/bs";

import { theme } from "../../Theme";
import { Views } from "./HomeCard";
import { Image } from "./PlayListCard";
const ChannelVideoCard = () => {
  return (
    <ChannelVideoCardWrapper>
      <Image
        src="https://i.ytimg.com/vi/1VK9yV9rWb4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCjtjS1ZTV-I2sBt3Cr6rYGTkCOcg"
        alt=""
      />
      <TitleWrapper>
        <Title>With Love by Faris REACTION | Ashmita Reacts</Title>
        <BsThreeDotsVertical2 />
      </TitleWrapper>
      <Views>
        {Math.floor(Math.random() * 100 + 1)}M Views{" "}
        <span>
          <BsDot />
        </span>
        2 days age
      </Views>
    </ChannelVideoCardWrapper>
  );
};

const ChannelVideoCardWrapper = styled.div`
  width: 300px;
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
