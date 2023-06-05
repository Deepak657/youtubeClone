import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeCard from "../components/Cards/HomeCard";
import { TabList } from "../Util";
import TabCard from "../components/Cards/TabCard";
// import Carousel from "nuka-carousel";
import { fetchVideo } from "../services/YoutubeService";
interface IProps {
  id: {
    videoId: string;
  };
  snippet: {
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

const Home = () => {
  const [homeVideos, setHomeVideos] = useState<IProps[]>([]);
  const [results, setResults] = useState(10);
  const [term, setTerm] = useState("All");
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setResults((prev) => prev + 10);
    }
  };

  useEffect(() => {
    const getVideo = async () => {
      try {
        const video = await fetchVideo({ results, term });
        setHomeVideos(video);
        console.log(video);
      } catch (err) {
        console.error(err);
      }
    };
    getVideo();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [results, term]);

  return (
    <Wrapper>
      <TabWrapper>
        {TabList.map((text) => {
          return (
            <TabCard
              key={text.id}
              tab={text.tab}
              onClick={() => setTerm(text.tab)}
            />
          );
        })}
      </TabWrapper>
      <HomeCardWrapper>
        {homeVideos.map((video) => {
          return (
            <HomeCard
              key={video.id.videoId}
              image={video.snippet.thumbnails.high.url}
              id={video.id.videoId}
              title={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
              publishedAt={video.snippet.publishedAt}
            />
          );
        })}
      </HomeCardWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 20px auto 0;
`;
const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
`;

const HomeCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export default Home;
