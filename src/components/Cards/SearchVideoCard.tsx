import React from "react";
import { BsDot } from "react-icons/bs";
import { Views } from "./HomeCard";
import styled from "styled-components";

const SearchVideoCard = () => {
  return (
    <SearchVideoCardWrapper>
      <Image
        src="https://i.ytimg.com/vi/9-fIftd_ISQ/maxresdefault.jpg"
        alt=""
      />
      <Genric>
        <Title>
          Lucky No.7 (Official Video) Mankirt Aulakh | Baani Sandhu | Jayy
          Randhawa | New Punjabi Song 2023
        </Title>
        <Views>
          1.1M Views{" "}
          <span>
            <BsDot />
          </span>
          5 days ago
        </Views>
        <ChannelTitleWrapper>
          <ImageChannel
            src="https://i.ytimg.com/vi/9-fIftd_ISQ/maxresdefault.jpg"
            alt=""
          />
          <ChannelTitle>Desi Junction Music</ChannelTitle>
        </ChannelTitleWrapper>
        <Description>
          Welcome to Official Channel Of Punjabi Singer & Lyricst Shree Brar.
          Shree Brar Presenting Official Video of "BHABI" Sung By
        </Description>
        {/* <div>
          <div>New</div>
          <div>4k</div>
        </div> */}
      </Genric>
    </SearchVideoCardWrapper>
  );
};

const ChannelTitle = styled.div`
  font-size: 14px;
  color: #fff;
`;

const ChannelTitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ImageChannel = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 700;
  color: #fff;
`;

const Description = styled.div`
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 700;
  color: #ababab;
`;
const Image = styled.img`
  width: 360px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Genric = styled.div`
  max-width: 100%;
`;

const SearchVideoCardWrapper = styled.div`
  max-width: 900px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
export default SearchVideoCard;
