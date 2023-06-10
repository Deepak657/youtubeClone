import React, { useState, useEffect, useCallback } from "react";
import SearchVideoCard from "../components/Cards/SearchVideoCard";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchVideos } from "../services/YoutubeService";
import { Wrapper } from "./Home";
import FilterCard from "../components/Cards/FilterCard";
import { Ititle } from "./Home";
import ChannelCard from "../components/Cards/ChannelCard";
import { AiOutlineMenuFold } from "react-icons/ai";
import { theme } from "../Theme";

export interface ISearch {
  id: {
    videoId: string;
    channelId: string;
  };
  snippet: {
    channelId: string;
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
  const [searchVideos, setSearchVideos] = useState<ISearch[]>([]);
  const [results, setResults] = useState(10);
  const [toggle, setToggle] = useState(false);
  const [type, setType] = useState("");
  const [uploadDate, setUploadDate] = useState("");
  const [duration, setDuration] = useState("");
  const [features, setFeatures] = useState("");
  const [sortBy, setSortBy] = useState("");

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
        const videos = await fetchVideos({
          results,
          term: q,
          type,
        });
        // videos.map((video: ISearch) => {
        //   console.log(video.snippet.channelId);
        // });
        setSearchVideos(videos);
        // console.log(videos);
      }
    } catch (err) {
      console.error(err);
    }
  }, [results, q, , type]);

  useEffect(() => {
    fetchResults();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchResults]);

  return (
    <Wrapper>
      <FilterButton onClick={() => setToggle(!toggle)}>
        <AiOutlineMenuFold />
        Filters
      </FilterButton>
      {toggle && (
        <FilterCard
          setType={(value: string) => setType(value)}
          type={type}
          setUploadDate={(value: string) => setUploadDate(value)}
          uploadDate={uploadDate}
          setDuration={(value: string) => setDuration(value)}
          duration={duration}
          setFeatures={(value: string) => setFeatures(value)}
          features={features}
          setSortBy={(value: string) => setSortBy(value)}
          sortBy={sortBy}
        />
      )}
      <hr />
      <SearchResultsWrapper>
        {type === "channel"
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
      </SearchResultsWrapper>
    </Wrapper>
  );
};

const FilterButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${theme.color.white};
  font-size: 18px;
  background: transparent;
  border: none;
  padding: 10px 16px;
  border-radius: 25px;
  cursor: pointer;
  :hover {
    background: ${theme.color.lightblack};
  }
`;

const SearchResultsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export default SearchResults;
