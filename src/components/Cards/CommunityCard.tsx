import React from "react";
import { BsThreeDotsVertical2 } from "./ChannelVideoCard";
import styled from "styled-components";
import { theme } from "../../Theme";
import { BiLike, BiDislike, BiCommentDetail } from "react-icons/bi";
const CommunityCard = () => {
  return (
    <CommunityCardWrapper>
      <Image
        src="https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg"
        alt=""
      />
      <CommunityWrapper>
        <ChannelName>
          I Overreact To Music <Published>1 month ago</Published>{" "}
        </ChannelName>
        <Commnunity>
          Hello all !! Do comment any specific song reaction that you would like
          to watch 🙏
        </Commnunity>
        <IconWrapper>
          <Icon>
            <BiLike />
            {Math.floor(Math.random() * 100 + 1)}
          </Icon>
          <Icon>
            <BiDislike />
            {Math.floor(Math.random() * 100 + 1)}
          </Icon>
          <Icon>
            <BiCommentDetail />
            {Math.floor(Math.random() * 100 + 1)}
          </Icon>
        </IconWrapper>
      </CommunityWrapper>
      <BsThreeDotsVertical2 />
    </CommunityCardWrapper>
  );
};

const Icon = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const CommunityWrapper = styled.div`
  width: 90%;
`;
const IconWrapper = styled.div`
  display: flex;
  gap: 30px;
  color: ${theme.color.lightwhite};
  align-items: center;
`;
const Commnunity = styled.p`
  color: ${theme.color.white};
  font-size: 16px;
  margin: 6px 0 16px;
`;
const ChannelName = styled.p`
  color: ${theme.color.white};
  font-size: 14px;
`;
const Published = styled.span`
  color: ${theme.color.lightwhite};
  font-size: 12px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const CommunityCardWrapper = styled.div`
  border: 1px solid ${theme.color.lightwhite};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export default CommunityCard;
