import React, { useCallback, useEffect, useState } from "react";
import { BsThreeDotsVertical, BsDot } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../Theme";
import { IHomeCard } from "../../pages/Home";
import { fetchChannel } from "../../services/YoutubeService";
import { useNavigate } from "react-router-dom";
import moment from "moment";

interface Iprops {
  video: IHomeCard;
  onChange: (value: string) => void;
}

const HomeCard = ({ video, onChange }: Iprops) => {
  const { id, snippet } = video;
  const { channelTitle, publishedAt, thumbnails, title, channelId } = snippet;
  const [channelImg, setChannelImg] = useState("");
  const navigate = useNavigate();
  const handleImage = (videoId: string, title: string) => {
    navigate(`/video/${videoId}`);
    onChange(title);
  };

  const getChannel = useCallback(async () => {
    try {
      const channel = await fetchChannel(channelId);
      const { thumbnails } = channel.snippet;
      setChannelImg(thumbnails.default.url);
      // console.log(channel);
    } catch (err) {
      console.error(err);
    }
  }, [channelId]);

  useEffect(() => {
    getChannel();
  }, [getChannel]);

  return (
    <HomeCardStyle>
      <Image
        src={thumbnails.high.url}
        alt=""
        onClick={() => {
          handleImage(id.videoId, title);
        }}
      />
      <Details>
        <ChannelImage
          src={channelImg}
          alt=""
          onClick={() => navigate(`/channel/${channelId}`)}
        />
        <TitleWrapper onClick={() => handleImage(id.videoId, title)}>
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
