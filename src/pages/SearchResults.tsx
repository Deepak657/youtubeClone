import React, { useState, useEffect, useCallback } from "react";
import SearchVideoCard from "../components/Cards/SearchVideoCard";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchVideo } from "../services/YoutubeService";
import { Wrapper } from "./Home";
import FilterCard from "../components/Cards/FilterCard";
import { Ititle } from "./Home";
import ChannelCard from "../components/Cards/ChannelCard";

export interface ISearch {
  id: {
    videoId: string;
    channelId: string;
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

const SearchResults = ({ onChange }: Ititle) => {
  const { q } = useParams();
  const [tab, setTab] = useState("");
  const [searchVideos, setSearchVideos] = useState<ISearch[]>([]);
  const [results, setResults] = useState(10);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setResults((prev) => prev + 10);
    }
  };
  const fetchResults = useCallback(async () => {
    try {
      if (q) {
        const res = await fetchVideo({ results, term: q, tab });
        setSearchVideos(res);
        // console.log(res);
      }
    } catch (err) {
      console.error(err);
    }
  }, [results, q, tab]);

  useEffect(() => {
    fetchResults();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchResults]);

  return (
    <Wrapper>
      <FilterCard onChange={(value: string) => setTab(value)} />

      <SearchResultsWrapper>
        {tab === "Channel"
          ? searchVideos.map((channel: ISearch, index) => {
              return <ChannelCard key={index} channel={channel} />;
            })
          : searchVideos.map((video: ISearch, index) => {
              return (
                <SearchVideoCard
                  key={index}
                  video={video}
                  onChange={onChange}
                />
              );
            })}
        {/* {searchVideos.map((video: ISearch, index) => {
          return (
            <SearchVideoCard key={index} video={video} onChange={onChange} />
          );
        })} */}
      </SearchResultsWrapper>
    </Wrapper>
  );
};

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export default SearchResults;
