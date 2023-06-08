import React, { useCallback, useEffect, useState } from "react";
import { fetchWatchVideoChannel } from "../services/YoutubeService";
import styled from "styled-components";
import { theme } from "../Theme";
import { Button } from "./Cards/ChannelCard";
import { BiLike, BiDislike, BiCut } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Iprops {
  id?: string;
}
const VIdeoPlay = ({ id }: Iprops) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [channelTitle, setChannelTitle] = useState("");
  const [channelId, setChannelId] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const getVideoChannel = useCallback(async () => {
    if (!id) {
      return;
    }
    try {
      const res = await fetchWatchVideoChannel(id);
      const { title, channelTitle, channelId, thumbnails } = res;
      setTitle(title);
      setChannelTitle(channelTitle);
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
    <>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <Title>{title}</Title>
      <ChannelIconWrapper>
        <ChannelWrapper onClick={() => navigate(`/channel/${channelId}`)}>
          <Image src={imgUrl} alt="" />
          <div>
            <ChannelTitle>{channelTitle}</ChannelTitle>
            <Subscribers>
              {" "}
              {Math.floor(Math.random() * 100 + 1)}K subscribers
            </Subscribers>
          </div>
          <Button>Subscribe</Button>
        </ChannelWrapper>
        <IconWrapper>
          <LikeDisLike>
            <Like>
              <BiLike />
              {Math.floor(Math.random() * 100 + 1)}
            </Like>
            <BiDislike />
          </LikeDisLike>
          <Span>
            <FaShare />
            Share
          </Span>
          <Span>
            <BiCut />
            Clip
          </Span>
          <BsThreeDots2 />
        </IconWrapper>
      </ChannelIconWrapper>
    </>
  );
};

const ChannelIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const ChannelWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const ChannelTitle = styled.p`
  font-size: 14px;
  color: ${theme.color.white};
`;
const Like = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
  padding-right: 14px;
  border-right: 1px solid ${theme.color.lightwhite};
`;
const Subscribers = styled.p`
  font-size: 12px;
  color: ${theme.color.lightwhite};
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const BsThreeDots2 = styled(BsThreeDots)`
  font-size: 36px;
  padding: 8px;
  border-radius: 50%;
  background: ${theme.color.lightblack};
  color: ${theme.color.white};
`;
const LikeDisLike = styled.div`
  padding: 8px 16px;

  display: flex;
  gap: 14px;
  align-items: center;
  border-radius: 25px;
  background: ${theme.color.lightblack};
  color: ${theme.color.white};
`;
const Span = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 8px 16px;
  border-radius: 25px;
  background: ${theme.color.lightblack};
  color: ${theme.color.white};
`;

const Title = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: ${theme.color.white};
`;

export default VIdeoPlay;
