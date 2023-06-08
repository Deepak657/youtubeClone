import React from "react";
import { BsFlag } from "react-icons/bs";
import { BiShare } from "react-icons/bi";
import styled from "styled-components";
import { theme } from "../../Theme";

const About = () => {
  return (
    <AboutWrapper>
      <DescriptionDetailsWrapper>
        <Title>Description</Title>
        <Description>
          Welcome to my gaming channel. It's a small start but a long journey.
          Hope you all will give love to this one and with all your blessings
          and my efforts we will rise together. Enjoy!
        </Description>
        <Title>Details</Title>
        <Details>
          Location: <span>India</span>
        </Details>
      </DescriptionDetailsWrapper>
      <StatsWrapper>
        <Stats>Stats</Stats>
        <Stats>joined 3 Nov 2020</Stats>
        <Stats>1,802 views</Stats>
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
