import React from "react";
import { BsThreeDotsVertical, BsDot } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../Theme";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { IHomeCard } from "../../interfaces/video";
import { Link } from "react-router-dom";
interface Iprops {
  video: IHomeCard;
}

const HomeCard = ({ video }: Iprops) => {
  const { id, snippet } = video;
  const { channelTitle, publishedAt, thumbnails, title, channelId } = snippet;
  const navigate = useNavigate();

  return (
    <HomeCardStyle>
      <LinkStyle to={`/video/${id.videoId}`} state={{ videoDetails: video }}>
        <Image src={thumbnails.high.url} alt="" />
      </LinkStyle>
      <Details>
        <ChannelImage
          src={thumbnails.default.url}
          alt=""
          onClick={() => navigate(`/channel/${channelId}`)}
        />
        <LinkStyle to={`/video/${id.videoId}`} state={{ videoDetails: video }}>
          <TitleWrapper>
            <Title>{title}</Title>
            <ChannelTitle>{channelTitle}</ChannelTitle>
            <Views>
              {Math.floor(Math.random() * 100 + 1)}M Views{" "}
              <span>
                <BsDot />
              </span>
              {moment(publishedAt).fromNow()}
            </Views>
          </TitleWrapper>
        </LinkStyle>

        <Menu>
          <BsThreeDotsVertical />
        </Menu>
      </Details>
    </HomeCardStyle>
  );
};

export const LinkStyle = styled(Link)`
  text-decoration: none;
`;

export const Views = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${theme.color.lightwhite};
  font-size: 16px;
`;
export const TitleWrapper = styled.div`
  width: 285px;
`;

export const Title = styled.div`
  width: 100%;
  line-height: 1.5;
  font-size: 15px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${theme.color.white};
`;
export const ChannelTitle = styled.div`
  color: ${theme.color.lightwhite};

  font-size: 16px;
  margin: 6px 0 3px;
`;

export const HomeCardStyle = styled.div`
  width: 380px;
  padding-bottom: 20px;
  cursor: pointer;
`;
export const Details = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Menu = styled.div`
  color: ${theme.color.white};
  font-size: 18px;
`;

export default HomeCard;
