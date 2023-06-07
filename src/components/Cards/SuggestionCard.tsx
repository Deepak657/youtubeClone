import React from "react";
import { BsDot } from "react-icons/bs";
import { Views } from "./HomeCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme";
import { IHomeCard } from "../../pages/Home";

interface Iprops {
  video: IHomeCard;
  onChange: (value: string) => void;
}

const SuggestionCard = ({ video, onChange }: Iprops) => {
  const { id, snippet } = video;
  const { channelTitle, thumbnails, title } = snippet;
  const navigate = useNavigate();
  const handleImage = (id: string, title: string) => {
    navigate(`/video/${id}`);
    onChange(title);
  };
  return (
    <SuggestionCardWrapper>
      <Image
        src={thumbnails.high.url}
        alt=""
        onClick={() => handleImage(id.videoId, title)}
      />
      <Genric>
        <Title>{title}</Title>
        <ChannelTitle>{channelTitle}</ChannelTitle>
        <Views>
          {Math.floor(Math.random() * 100 + 1)}M Views{" "}
          <span>
            <BsDot />
          </span>
          5 days ago
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
  width: 200px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

const Genric = styled.div`
  max-width: 100%;
`;

const SuggestionCardWrapper = styled.div`
  width: 380px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
export default SuggestionCard;
