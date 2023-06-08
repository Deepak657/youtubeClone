import React from "react";
import Skeleton from "react-loading-skeleton";
import { HomeCardStyle } from "./HomeCard";

const SkeletonCard = () => {
  return (
    <HomeCardStyle>
      <Skeleton width={380} height={200} />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </HomeCardStyle>
  );
};

export default SkeletonCard;
