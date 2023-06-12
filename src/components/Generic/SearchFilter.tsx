import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";
import { RxCross2 } from "react-icons/rx";

interface Iprops {
  text: string;
  onChange: (value: string) => void;
  isActive: boolean;
}
const SearchFilter = ({ text, onChange, isActive }: Iprops) => {
  return (
    <Tab flag={isActive}>
      <span onClick={() => onChange(text)}>{text}</span>
      <span onClick={() => onChange("")}>{isActive && <RxCross2 />}</span>
    </Tab>
  );
};

const Tab = styled.p<{ flag: boolean }>`
  color: ${({ flag }) => (flag ? theme.color.white : theme.color.lightwhite)};
  cursor: pointer;
  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default SearchFilter;
