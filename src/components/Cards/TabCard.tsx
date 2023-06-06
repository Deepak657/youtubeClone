import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../../Theme";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  tab: string;
}

const TabCard = ({ tab, ...restProps }: Iprops) => {
  return <Tab {...restProps}>{tab}</Tab>;
};

const Tab = styled.button`
  border: none;
  color: ${theme.color.white};
  padding: 6px 14px;
  border-radius: 10px;
  background: ${theme.color.lightblack};
  cursor: pointer;
  :hover {
    background: #4e4e4e;
    transition: 0.2s;
  }
`;

export default TabCard;
