import React, { useState, useEffect } from "react";
import SearchVideoCard from "../components/Cards/SearchVideoCard";
import styled from "styled-components";
import { useParams } from "react-router-dom";
// import { fetchVideos } from "../services/YoutubeService";
import { Wrapper } from "./Home";
import FilterCard from "../components/Cards/FilterCard";
import ChannelCard from "../components/Cards/ChannelCard";
import { AiOutlineMenuFold } from "react-icons/ai";
import { theme } from "../Theme";
// import { IVideoSearchParams } from "../interfaces/videoSearchParams";
import { fetchHomeVidoeStart } from "../redux/actions/HomeVideoActions";
import { useDispatch } from "react-redux";
import { useGSelector } from "../redux/Store";

export interface SearchParams {
  type: string;
  uploadDate: string;
  duration: string;
  features: string;
  sortBy: string;
}

const SearchResults = () => {
  const dispatch = useDispatch();
  const { q } = useParams();
  const { homeVideos } = useGSelector((state) => state.data);
  const [toggle, setToggle] = useState(false);
  const [filterValues, setFilterValues] = useState<SearchParams>({
    type: "",
    uploadDate: "",
    duration: "",
    features: "",
    sortBy: "",
  });

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      dispatch(
        fetchHomeVidoeStart({
          q: q,
          chart: "mostPopular",
          pageToken: q && homeVideos.get(q)?.nextPageToken,
        })
      );
    }
  };
  useEffect(() => {
    if (q && homeVideos.has(q)) {
      return;
    }
    dispatch(
      fetchHomeVidoeStart({
        q: q,
        chart: "mostPopular",
      })
    );
  }, [q, homeVideos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
        {/* {filterValues.type === "channel"
          ? homeVideos.map((channel, index) => {
              return <ChannelCard key={index} channel={channel} />;
            })
          : homeVideos.map((video, index) => {
              return <SearchVideoCard key={index} video={video} />;
            })} */}

        {q &&
          homeVideos.get(q)?.items.map((video, index) => {
            return <SearchVideoCard key={index} video={video} />;
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
