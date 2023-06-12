import React from "react";
import { Duration, Features, SortBy, Type, UploadDate } from "../../Util";
import styled from "styled-components";
import { theme } from "../../Theme";
import SearchFilter from "../Generic/SearchFilter";
import { SearchParams } from "../../pages/SearchResults";

interface Iprops {
  onFilterChange: (value: SearchParams) => void;
  filterValues: SearchParams;
}
const FilterCard = ({ onFilterChange, filterValues }: Iprops) => {
  const onValueChange = (filed: keyof SearchParams, newValues: string) => {
    onFilterChange({
      ...filterValues,
      [filed]: newValues,
    });
  };
  return (
    <FilterCardWrapper>
      <FilterSection>
        <P>UPLOAD DATE</P>
        {UploadDate.map((text) => {
          return (
            <SearchFilter
              key={text.id}
              text={text.tab}
              onChange={(newValue) => {
                onValueChange("uploadDate", newValue);
              }}
              isActive={filterValues.uploadDate === text.tab}
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
              onChange={(newValue) => {
                onValueChange("type", newValue);
              }}
              isActive={filterValues.type === text.tab}
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
              onChange={(newValue) => {
                onValueChange("duration", newValue);
              }}
              isActive={filterValues.duration === text.tab}
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
              onChange={(newValue) => {
                onValueChange("features", newValue);
              }}
              isActive={filterValues.features === text.tab}
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
              onChange={(newValue) => {
                onValueChange("sortBy", newValue);
              }}
              isActive={filterValues.sortBy === text.tab}
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
