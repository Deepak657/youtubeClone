import React from "react";
import { BsDot } from "react-icons/bs";
import { Views } from "./HomeCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme";

interface Iprops {
  id: string;
  image: string;
  title: string;
  channelTitle: string;
}

const SuggestionCard = (props: Iprops) => {
  const { id, image, title, channelTitle } = props;
  const navigate = useNavigate();
  return (
    <SuggestionCardWrapper>
      <Image src={image} alt="" onClick={() => navigate(`/video/${id}`)} />
      <Genric>
        <Title>{title}</Title>
        <ChannelTitle>{channelTitle}</ChannelTitle>
        <Views>
          1.1M Views{" "}
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
