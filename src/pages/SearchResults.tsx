import React, { useState, useEffect } from "react";
import SearchVideoCard from "../components/Cards/SearchVideoCard";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchVideo } from "../components/services/YoutubeService";

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

const SearchResults = () => {
  const { q } = useParams();
  const [searchVideos, setSearchVideos] = useState<IProps[]>([]);
  const [results, setResults] = useState(10);
  useEffect(() => {
    if (!q) {
      return;
    }

    const fetchResults = async () => {
      const res = await fetchVideo({ results, q });
    };
  }, [results, q]);

  return (
    <SearchResultsWrapper>
      <SearchVideoCard />
      <SearchVideoCard />
    </SearchResultsWrapper>
  );
};

const SearchResultsWrapper = styled.div`
  /* line-height: 2; */
`;

export default SearchResults;
