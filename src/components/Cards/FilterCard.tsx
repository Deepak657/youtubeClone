import React from "react";
import { Duration, Features, SortBy, Type, UploadDate } from "../../Util";
import styled from "styled-components";
import { theme } from "../../Theme";

const FilterCard = () => {
  return (
    <FilterCardWrapper>
      <FilterSection>
        <P>UPLOAD DATE</P>
        {UploadDate.map((text) => {
          return <Tab key={text.id}>{text.tab}</Tab>;
        })}
      </FilterSection>
      <FilterSection>
        <P>TYPE</P>
        {Type.map((text) => {
          return <Tab key={text.id}>{text.tab}</Tab>;
        })}
      </FilterSection>
      <FilterSection>
        <P>DURATION</P>
        {Duration.map((text) => {
          return <Tab key={text.id}>{text.tab}</Tab>;
        })}
      </FilterSection>
      <FilterSection>
        <P>FEATURES</P>
        {Features.map((text) => {
          return <Tab key={text.id}>{text.tab}</Tab>;
        })}
      </FilterSection>
      <FilterSection>
        <P>SORT BY</P>
        {SortBy.map((text) => {
          return <Tab key={text.id}>{text.tab}</Tab>;
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

const Tab = styled.p`
  color: ${theme.color.lightwhite};
  cursor: pointer;
  font-size: 14px;
`;
export default FilterCard;
