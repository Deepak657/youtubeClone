import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  tab: string;
}

const TabCard = ({ tab, ...restProps }: Iprops) => {
  return <Tab {...restProps}>{tab}</Tab>;
};

const Tab = styled.button`
  border: none;
  color: #fff;
  padding: 6px 14px;
  border-radius: 10px;
  background: #242424;
  cursor: pointer;
  :hover {
    background: #4e4e4e;
    transition: 0.2s;
  }
`;

export default TabCard;
