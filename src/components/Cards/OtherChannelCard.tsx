import React from "react";
import { ChannelName, Image, ChannelSubscribes, Button } from "./ChannelCard";
import styled from "styled-components";

const OtherChannelCard = () => {
  return (
    <OtherChannelCardWrapper>
      <Image
        src="https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg"
        alt=""
      />
      <ChannelName>I Just React And Review</ChannelName>
      <ChannelSubscribes>
        {Math.floor(Math.random() * 100 + 1)}K subscribers
      </ChannelSubscribes>
      <Button>Subscribe</Button>
    </OtherChannelCardWrapper>
  );
};

const OtherChannelCardWrapper = styled.div`
  text-align: center;
`;
export default OtherChannelCard;
