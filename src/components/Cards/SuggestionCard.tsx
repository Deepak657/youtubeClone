import React from "react";
import { BsDot } from "react-icons/bs";
import { Views } from "./HomeCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme";
import { IHomeCard } from "../../pages/Home";
import moment from "moment";

interface Iprops {
  video: IHomeCard;
  onChange: (value: string) => void;
}

const SuggestionCard = ({ video, onChange }: Iprops) => {
  const navigate = useNavigate();
  const { channelTitle, thumbnails, title, publishedAt } = video.snippet;
  const handleImage = (title: string) => {
    onChange(title);
  };

  return (
    <SuggestionCardWrapper
      onClick={() => navigate(`/video/${video.id.videoId}`)}
    >
      <Image
        src={thumbnails.high.url}
        alt=""
        onClick={() => handleImage(title)}
      />
      <Genric>
        <Title>{title}</Title>
        <ChannelTitle>{channelTitle}</ChannelTitle>
        <Views>
          {Math.floor(Math.random() * 100 + 1)}M Views{" "}
          <span>
            <BsDot />
          </span>
          {moment(publishedAt).fromNow()}
        </Views>
      </Genric>
    </SuggestionCardWrapper>
  );
};

const ChannelTitle = styled.div`
  font-size: 12px;
  color: ${theme.color.lightwhite};
`;

const Title = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${theme.color.white};
`;

const Image = styled.img`
  width: 160px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const Genric = styled.div`
  max-width: 100%;
`;

const SuggestionCardWrapper = styled.div`
  width: 380px;
  display: flex;
  /* align-items: flex-start; */
  gap: 10px;
  cursor: pointer;
  height: 90px;
`;
export default SuggestionCard;
