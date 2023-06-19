import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeCard from "../components/Cards/HomeCard";
import { TabList } from "../Util";
// import Carousel from "nuka-carousel";
import SkeletonCard from "../components/Cards/SkeletonCard";
import ButtonTab from "../components/Button/ButtonTab";
import { useDispatch } from "react-redux";
import {
  changeTab,
  fetchHomeVidoeStart,
} from "../redux/actions/HomeVideoActions";
import { useGSelector } from "../redux/Store";

const Home = () => {
  const [term, setTerm] = useState("All");
  const dispatch = useDispatch();
  const { homeVideos, loading } = useGSelector((state) => state.data);

  const homeData = homeVideos.get(term);
  // console.log(homeVideos);
  // console.log(nextPageToken);

  const handleClick = (value: string) => {
    setTerm(value);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      dispatch(
        fetchHomeVidoeStart({
          q: term,
          chart: "mostPopular",
          pageToken: homeData?.nextPageToken,
        })
      );
    }
  };
  useEffect(() => {
    if (homeVideos.has(term)) {
      return;
    }
    dispatch(
      fetchHomeVidoeStart({
        q: term,
        chart: "mostPopular",
      })
    );
  }, [term, homeVideos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    dispatch(changeTab(term));
  }, [term]);

  return (
    <Wrapper>
      <TabWrapper>
        {TabList.map((tab) => {
          return (
            <ButtonTab
              key={tab.id}
              display={tab.tab}
              value={tab.tab}
              orderType={term}
              onClick={() => handleClick(tab.tab)}
            />
          );
        })}
      </TabWrapper>
      {loading ? (
        <HomeCardWrapper>
          <SkeletonCard times={20} />
        </HomeCardWrapper>
      ) : (
        <HomeCardWrapper>
          {homeData?.items.map((video, index) => {
            return <HomeCard video={video} key={index} />;
          })}
        </HomeCardWrapper>
      )}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
`;
const TabWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  position: sticky;
  top: 64px;
  background: #000;
`;

const HomeCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export default Home;
