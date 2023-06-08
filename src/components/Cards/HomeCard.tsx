import React, { useCallback, useEffect, useState } from "react";
import { BsThreeDotsVertical, BsDot } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../Theme";
import { IHomeCard } from "../../pages/Home";
import { fetchWatchVideoChannel } from "../../services/YoutubeService";
import { useNavigate } from "react-router-dom";

interface Iprops {
  video: IHomeCard;
  onChange: (value: string) => void;
}

const HomeCard = ({ video, onChange }: Iprops) => {
  const [channelId, setChannelId] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const { id, snippet } = video;
  const { channelTitle, publishedAt, thumbnails, title } = snippet;
  const navigate = useNavigate();
  const handleImage = (title: string) => {
    onChange(title);
  };

  const getVideoChannel = useCallback(async () => {
    if (!id) {
      return;
    }
    try {
      const res = await fetchWatchVideoChannel(id.videoId);
      const { channelId, thumbnails } = res;
      setChannelId(channelId);
      setImgUrl(thumbnails.high.url);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  useEffect(() => {
    getVideoChannel();
  }, [getVideoChannel]);

  return (
    <HomeCardStyle onClick={() => navigate(`/video/${id.videoId}`)}>
      <Image
        src={thumbnails.high.url}
        alt=""
        onClick={() => handleImage(title)}
      />
      <Details>
        <ChannelImage
          src={imgUrl}
          alt=""
          onClick={() => navigate(`/channel/${channelId}`)}
        />
        <TitleWrapper>
          <Title>{title}</Title>
          <ChannelTitle>{channelTitle}</ChannelTitle>
          <Views>
            {Math.floor(Math.random() * 100 + 1)}M Views{" "}
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
  color: ${theme.color.lightwhite};
  font-size: 16px;
`;
const TitleWrapper = styled.div`
  width: 285px;
`;

const Title = styled.div`
  width: 100%;
  line-height: 1.5;
  font-size: 15px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${theme.color.white};
`;
const ChannelTitle = styled.div`
  color: ${theme.color.lightwhite};

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

const ChannelImage = styled.img`
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
  color: ${theme.color.white};
  font-size: 18px;
`;

export default HomeCard;
