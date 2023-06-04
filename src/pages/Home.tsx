import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import HomeCard from "../components/Cards/HomeCard";
import { TabList } from "../Util";
import TabCard from "../components/Cards/TabCard";
// import Carousel from "nuka-carousel";

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

interface Ivalue {
  value: string;
}

const Home = ({ value }: Ivalue) => {
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
    value && setTerm(value);
    const fetchVideo = async () => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              maxResults: results,
              chart: "mostPopular",
              key: "AIzaSyBaNi-MTp8i3RyR0Kr34b2FFtxPWW7jXe4",
              q: term,
            },
          }
        );
        setHomeVideos(res.data.items);
        console.log(res.data.items);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVideo();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [results, term, value]);

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

const Wrapper = styled.div`
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
