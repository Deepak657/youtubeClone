import React from "react";
import OtherChannelCard from "../Cards/OtherChannelCard";
import styled from "styled-components";
import { theme } from "../../Theme";

const Channels = () => {
  return (
    <>
      <Title>My Other channels</Title>
      <OtherChannelCard />
    </>
  );
};
const Title = styled.div`
  color: ${theme.color.white};
  font-size: 18px;
`;

export default Channels;
