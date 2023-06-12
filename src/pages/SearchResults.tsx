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
import { IVideoSearchParams } from "../interfaces/videoSearchParams";

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

export interface SearchParams {
  type: string;
  uploadDate: string;
  duration: string;
  features: string;
  sortBy: string;
}

const SearchResults = ({ onChange }: Ititle) => {
  const { q } = useParams();
  const [searchVideos, setSearchVideos] = useState<ISearch[]>([]);
  const [savePageToken, setSavePageToken] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");

  const [toggle, setToggle] = useState(false);

  const [filterValues, setFilterValues] = useState<SearchParams>({
    type: "",
    uploadDate: "",
    duration: "",
    features: "",
    sortBy: "",
  });

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setNextPageToken(savePageToken);
    }
  }, [setNextPageToken, savePageToken]);
  const fetchResults = useCallback(async (value: IVideoSearchParams) => {
    try {
      const data = await fetchVideos(value);
      const { nextPageToken, items } = data;
      setSavePageToken(nextPageToken);
      setSearchVideos((prev) => [...prev, ...items]);
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchResults({ q: q, chart: "mostPopular", pageToken: nextPageToken });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchResults, q, nextPageToken, handleScroll]);

  return (
    <Wrapper>
      <FilterButton onClick={() => setToggle(!toggle)}>
        <AiOutlineMenuFold />
        Filters
      </FilterButton>
      {toggle && (
        <FilterCard
          filterValues={filterValues}
          onFilterChange={(newValues) => setFilterValues(newValues)}
        />
      )}
      <hr />
      <SearchResultsWrapper>
        {filterValues.type === "channel"
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
