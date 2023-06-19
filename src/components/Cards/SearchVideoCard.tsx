import React from "react";
import { BsDot } from "react-icons/bs";
import { Views } from "./HomeCard";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { theme } from "../../Theme";
import moment from "moment";
import { IHomeCard } from "../../interfaces/video";

interface Iprops {
  video: IHomeCard;
}

const SearchVideoCard = ({ video }: Iprops) => {
  const { id, snippet } = video;
  const {
    channelTitle,
    description,
    thumbnails,
    title,
    publishedAt,
    channelId,
  } = snippet;

  const navigate = useNavigate();

  return (
    <SearchVideoCardWrapper>
      <LinkStyle to={`/video/${id.videoId}`} state={{ videoDetails: video }}>
        <Image src={thumbnails.high.url} alt="" />
      </LinkStyle>
      <Genric>
        <Title to={`/video/${id.videoId}`} state={{ videoDetails: video }}>
          {title}
        </Title>
        <Views>
          {Math.floor(Math.random() * 100 + 1)}M Views{" "}
          <span>
            <BsDot />
          </span>
          {moment(publishedAt).fromNow()}
        </Views>
        <ChannelTitleWrapper onClick={() => navigate(`/channel/${channelId}`)}>
          <ImageChannel src={thumbnails.default.url} alt="" />
          <ChannelTitle>{channelTitle}</ChannelTitle>
        </ChannelTitleWrapper>
        <Description
          to={`/video/${id.videoId}`}
          state={{ videoDetails: video }}
        >
          {description}
        </Description>
        {/* <div>
          <div>New</div>
          <div>4k</div>
        </div> */}
      </Genric>
    </SearchVideoCardWrapper>
  );
};

const LinkStyle = styled(Link)`
  text-decoration: none;
  height: 200px;
  width: 360px;
`;

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

const Title = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
  text-decoration: none;
  color: ${theme.color.white};
`;

const Description = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${theme.color.lightwhite};
`;
const Image = styled.img`
  width: 360px;
  object-fit: cover;
  height: 100%;
  border-radius: 14px;
`;

const Genric = styled.div`
  max-width: 100%;
  align-items: start;
`;

const SearchVideoCardWrapper = styled.div`
  max-width: 1100px;
  display: flex;
  gap: 20px;
  cursor: pointer;
`;
export default SearchVideoCard;
