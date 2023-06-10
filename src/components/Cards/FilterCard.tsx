import React from "react";
import { Duration, Features, SortBy, Type, UploadDate } from "../../Util";
import styled from "styled-components";
import { theme } from "../../Theme";
import SearchFilter from "../Generic/SearchFilter";

interface Iprops {
  setType: (value: string) => void;
  type: string;
  setUploadDate: (value: string) => void;
  uploadDate: string;
  setDuration: (value: string) => void;
  duration: string;
  setFeatures: (value: string) => void;
  features: string;
  setSortBy: (value: string) => void;
  sortBy: string;
}
const FilterCard = ({
  setType,
  type,
  setUploadDate,
  uploadDate,
  setDuration,
  duration,
  setFeatures,
  features,
  setSortBy,
  sortBy,
}: Iprops) => {
  return (
    <FilterCardWrapper>
      <FilterSection>
        <P>UPLOAD DATE</P>
        {UploadDate.map((text) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={setUploadDate}
              searchFilter={uploadDate}
            />
          );
        })}
      </FilterSection>
      <FilterSection>
        <P>TYPE</P>
        {Type.map((text) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={setType}
              searchFilter={type}
            />
          );
        })}
      </FilterSection>
      <FilterSection>
        <P>DURATION</P>
        {Duration.map((text) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={setDuration}
              searchFilter={duration}
            />
          );
        })}
      </FilterSection>
      <FilterSection>
        <P>FEATURES</P>
        {Features.map((text) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={setFeatures}
              searchFilter={features}
            />
          );
        })}
      </FilterSection>
      <FilterSection>
        <P>SORT BY</P>
        {SortBy.map((text) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={setSortBy}
              searchFilter={sortBy}
            />
          );
        })}
      </FilterSection>
    </FilterCardWrapper>
  );
};

const FilterCardWrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  margin: 20px 0;
`;
const FilterSection = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const P = styled.p`
  color: ${theme.color.white};
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.color.lightwhite};
  font-size: 14px;
`;

export default FilterCard;
