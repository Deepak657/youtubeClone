import React, { useState, useEffect } from "react";
import SearchVideoCard from "../components/Cards/SearchVideoCard";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchVideo } from "../services/YoutubeService";
import { Wrapper } from "./Home";

interface IProps {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    description: string;
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

const SearchResults = () => {
  const { q } = useParams();
  const [searchVideos, setSearchVideos] = useState<IProps[]>([]);
  const [results, setResults] = useState(10);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setResults((prev) => prev + 10);
    }
  };
  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (q) {
          const res = await fetchVideo({ results, term: q });
          setSearchVideos(res);
          console.log(res);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchResults();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [results, q]);

  return (
    <Wrapper>
      <SearchResultsWrapper>
        {searchVideos.map((video) => {
          return (
            <SearchVideoCard
              key={video.id.videoId}
              image={video.snippet.thumbnails.default.url}
              title={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
              description={video.snippet.description}
            />
          );
        })}
      </SearchResultsWrapper>
    </Wrapper>
  );
};

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export default SearchResults;
