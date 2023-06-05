import React from "react";
import { BsThreeDotsVertical, BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Iprops {
  image: string;
  id: string;
  title: string;
  channelTitle: string;
  publishedAt: String;
}

const HomeCard = (video: Iprops) => {
  const { image, id, title, channelTitle, publishedAt } = video;
  const navigate = useNavigate();
  return (
    <HomeCardStyle>
      <Image src={image} alt="" onClick={() => navigate(`/video/${id}`)} />
      <Details>
        <DetailImage src={image} alt="" />
        <TitleWrapper>
          <Title>{title}</Title>
          <ChannelTitle>{channelTitle}</ChannelTitle>
          <Views>
            1.1M Views{" "}
            <span>
              <BsDot />
            </span>
            {publishedAt}
          </Views>
        </TitleWrapper>
        <Menu>
          <BsThreeDotsVertical />
        </Menu>
      </Details>
    </HomeCardStyle>
  );
};

export const Views = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #ffffff7e;
  font-family: sans-serif;
  font-size: 16px;
`;
const TitleWrapper = styled.div`
  width: 285px;
`;

const Title = styled.div`
  line-height: 1.5;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
`;
const ChannelTitle = styled.div`
  color: #ffffff7e;
  font-family: sans-serif;
  font-size: 16px;
  margin: 6px 0 3px;
`;

const HomeCardStyle = styled.div`
  width: 380px;
  padding-bottom: 20px;
`;
const Details = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`;

const DetailImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

const Menu = styled.div`
  color: #fff;
  font-size: 18px;
`;

export default HomeCard;
