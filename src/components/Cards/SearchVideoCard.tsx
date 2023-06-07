import React from "react";
import { BsDot } from "react-icons/bs";
import { Views } from "./HomeCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme";
import { ISearch } from "../../pages/SearchResults";

interface Iprops {
  video: ISearch;
  onChange: (value: string) => void;
}

const SearchVideoCard = ({ video, onChange }: Iprops) => {
  const { id, snippet } = video;
  const { channelTitle, description, thumbnails, title } = snippet;
  const navigate = useNavigate();
  const handleImage = (id: string, title: string) => {
    navigate(`/video/${id}`);
    onChange(title);
  };
  return (
    <SearchVideoCardWrapper>
      <Image
        src={thumbnails.high.url}
        alt=""
        onClick={() => handleImage(id.videoId, title)}
      />
      <Genric>
        <Title>{title}</Title>
        <Views>
          {Math.floor(Math.random() * 100 + 1)}M Views{" "}
          <span>
            <BsDot />
          </span>
          5 days ago
        </Views>
        <ChannelTitleWrapper>
          <ImageChannel src={thumbnails.high.url} alt="" />
          <ChannelTitle>{channelTitle}</ChannelTitle>
        </ChannelTitleWrapper>
        <Description>{description}</Description>
        {/* <div>
          <div>New</div>
          <div>4k</div>
        </div> */}
      </Genric>
    </SearchVideoCardWrapper>
  );
};

const ChannelTitle = styled.div`
  font-size: 14px;
  color: ${theme.color.lightwhite};
`;

const ChannelTitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 15px 0;
`;

const ImageChannel = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${theme.color.white};
`;

const Description = styled.div`
  font-size: 14px;
  color: ${theme.color.lightwhite};
`;
const Image = styled.img`
  width: 360px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
  cursor: pointer;
`;

const Genric = styled.div`
  max-width: 100%;
`;

const SearchVideoCardWrapper = styled.div`
  max-width: 1100px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
export default SearchVideoCard;
