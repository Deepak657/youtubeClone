import React from "react";
import { BsFlag } from "react-icons/bs";
import { BiShare } from "react-icons/bi";
import styled from "styled-components";
import { theme } from "../../Theme";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useGSelector } from "../../redux/Store";

const About = () => {
  const { channelId } = useParams();
  const { channel } = useGSelector((state) => state.channelData);
  const channelDetails = channelId && channel.get(channelId)?.[0];

  return (
    <>
      {channelDetails && (
        <AboutWrapper>
          <DescriptionDetailsWrapper>
            <Title>Description</Title>
            <Description>{channelDetails.snippet.description}</Description>
            <Title>Details</Title>
            <Details>
              Location: <span>{channelDetails.snippet.country}</span>
            </Details>
          </DescriptionDetailsWrapper>
          <StatsWrapper>
            <Stats>Stats</Stats>
            <Stats>
              joined {moment(channelDetails.snippet.publishedAt).fromNow()}
            </Stats>
            <Stats>{channelDetails.statistics.viewCount} views</Stats>
            <Icon>
              <BsFlag />
              <BiShare />
            </Icon>
          </StatsWrapper>
        </AboutWrapper>
      )}
    </>
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
  flex-wrap: wrap;
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
