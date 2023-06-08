import React, { useCallback, useEffect, useState } from "react";
import { BsFlag } from "react-icons/bs";
import { BiShare } from "react-icons/bi";
import styled from "styled-components";
import { theme } from "../../Theme";
import {
  convertToRelativeTime,
  fetchChannel,
} from "../../services/YoutubeService";
import { useParams } from "react-router-dom";

const About = () => {
  const { channelId } = useParams();
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [viewCount, setViewCount] = useState("");

  const getChannel = useCallback(async () => {
    if (!channelId) {
      return;
    }
    try {
      const channel = await fetchChannel(channelId);
      const { country, description, publishedAt } = channel.snippet;
      const { viewCount } = channel.statistics;
      setCountry(country);
      setDescription(description);
      setPublishedAt(publishedAt);
      setViewCount(viewCount);
      // console.log(channel);
    } catch (er) {
      console.log(er);
    }
  }, [channelId]);
  useEffect(() => {
    getChannel();
  }, [getChannel]);
  return (
    <AboutWrapper>
      <DescriptionDetailsWrapper>
        <Title>Description</Title>
        <Description>{description}</Description>
        <Title>Details</Title>
        <Details>
          Location: <span>{country}</span>
        </Details>
      </DescriptionDetailsWrapper>
      <StatsWrapper>
        <Stats>Stats</Stats>
        <Stats>joined {convertToRelativeTime(publishedAt)}</Stats>
        <Stats>{viewCount} views</Stats>
        <Icon>
          <BsFlag />
          <BiShare />
        </Icon>
      </StatsWrapper>
    </AboutWrapper>
  );
};
const DescriptionDetailsWrapper = styled.div`
  width: 600px;
`;

const Description = styled.p`
  text-align: start;
  color: ${theme.color.white};
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${theme.color.lightwhite};
  margin-bottom: 30px;
`;

const Details = styled.p`
  display: flex;
  color: ${theme.color.lightwhite};
  font-size: 12px;
  align-items: center;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${theme.color.lightwhite};
`;
const Title = styled.p`
  color: ${theme.color.white};
  font-size: 14px;
  margin: 0 0 30px;
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StatsWrapper = styled.div`
  width: 300px;
`;

const Stats = styled.p`
  color: ${theme.color.white};
  font-size: 14px;
  border-bottom: 1px solid ${theme.color.lightwhite};
  padding-bottom: 20px;
  margin-bottom: 20px;
`;
const Icon = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  color: ${theme.color.white};
`;
export default About;
