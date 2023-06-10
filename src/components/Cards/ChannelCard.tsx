import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";
import { ISearch } from "../../pages/SearchResults";
import { useNavigate } from "react-router-dom";

interface Iprops {
  channel: ISearch;
}

const ChannelCard = ({ channel }: Iprops) => {
  const navigate = useNavigate();
  const { id, snippet } = channel;
  const { channelTitle, description, thumbnails } = snippet;
  return (
    <ChannelCardWrapper onClick={() => navigate(`/channel/${id.channelId}`)}>
      <ImageWrapper>
        <Image src={thumbnails.high.url} alt="" />
      </ImageWrapper>
      <TitleWrapper>
        <ChannelName>{channelTitle}</ChannelName>
        <ChannelSubscribes>
          @{id.channelId} . {Math.floor(Math.random() * 100 + 1)}K subscribes
        </ChannelSubscribes>
        <Description>{description}</Description>
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
