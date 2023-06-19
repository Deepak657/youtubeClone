import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";
import { useNavigate } from "react-router-dom";
import { IChannel } from "../../interfaces/channels";

interface Iprops {
  channel?: IChannel;
}

const ChannelCard = ({ channel }: Iprops) => {
  const navigate = useNavigate();

  return (
    <ChannelCardWrapper
      onClick={() => navigate(`/channel/${channel?.id.channelId}`)}
    >
      <ImageWrapper>
        <Image src={channel?.snippet.thumbnails.high.url} alt="" />
      </ImageWrapper>
      <TitleWrapper>
        <ChannelName>{channel?.snippet.channelTitle}</ChannelName>
        <ChannelSubscribes>
          {channel?.snippet.customUrl} . {Math.floor(Math.random() * 100 + 1)}K
          subscribes
        </ChannelSubscribes>
        <Description>{channel?.snippet.description}</Description>
      </TitleWrapper>
      <Button>Subscribe</Button>
    </ChannelCardWrapper>
  );
};
export const ChannelName = styled.p`
  font-size: 18px;
  color: ${theme.color.white};
`;
export const ChannelSubscribes = styled.p`
  font-size: 12px;
  color: ${theme.color.lightwhite};
  margin-top: 16px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 12px;
  color: ${theme.color.lightwhite};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
const ChannelCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  cursor: pointer;
`;
const TitleWrapper = styled.div`
  width: 700px;
`;
const ImageWrapper = styled.div`
  width: 360px;
  text-align: center;
`;
export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Button = styled.button`
  padding: 10px 16px;
  border: none;
  color: ${theme.color.black};
  border-radius: 25px;
  background: ${theme.color.white};
  cursor: pointer;
  :hover {
    background: ${theme.color.lightwhite};
  }
`;

export default ChannelCard;
