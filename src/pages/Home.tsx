import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import HomeCard from "../components/Cards/HomeCard";
import { TabList } from "../Util";
// import Carousel from "nuka-carousel";
import { fetchVideos } from "../services/YoutubeService";
import SkeletonCard from "../components/Cards/SkeletonCard";
import ButtonTab from "../components/Button/ButtonTab";
export interface IHomeCard {
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
}
export interface Ititle {
  onChange: (value: string) => void;
}

const Home = ({ onChange }: Ititle) => {
  const [homeVideos, setHomeVideos] = useState<IHomeCard[]>([]);
  const [results, setResults] = useState(10);
  const [term, setTerm] = useState("All");
  const [loading, setLoading] = useState(true);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setResults((prev) => prev + 10);
    }
  };
  const getVideos = useCallback(async () => {
    try {
      const videos = await fetchVideos({ results, term });
      setHomeVideos(videos);
      console.log(videos);

      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [results, term]);

  useEffect(() => {
    getVideos();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getVideos]);

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
              onClick={() => setTerm(tab.tab)}
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
          {homeVideos.map((video: IHomeCard, index) => {
            return <HomeCard video={video} key={index} onChange={onChange} />;
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
