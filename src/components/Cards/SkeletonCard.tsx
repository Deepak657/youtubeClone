import React from "react";
import Skeleton from "react-loading-skeleton";
import { ChannelTitle, HomeCardStyle, Title, TitleWrapper } from "./HomeCard";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

interface Iprops {
  times: number;
}
const SkeletonCard = ({ times }: Iprops) => {
  return (
    <>
      {Array(times)
        .fill(0)
        .map((i, index) => {
          return (
            <HomeCardStyle key={index}>
              <Skeleton width={380} height={200} />
              <Details>
                <Skeleton circle width={40} height={40} />
                <TitleWrapper>
                  <Title>
                    <Skeleton />
                  </Title>
                  <ChannelTitle>
                    <Skeleton />
                  </ChannelTitle>
                </TitleWrapper>
              </Details>
            </HomeCardStyle>
          );
        })}
    </>
  );
};

const Details = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default SkeletonCard;
