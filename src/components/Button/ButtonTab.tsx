import React, { ButtonHTMLAttributes } from "react";

import styled from "styled-components";
import { theme } from "../../Theme";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  display: string;
  value: string;
  orderType: string;
}

const ButtonTab = ({ display, value, orderType, ...restProps }: Iprops) => {
  return (
    <Button flag={orderType === value ? true : false} {...restProps}>
      {display}
    </Button>
  );
};

const Button = styled.button<{ flag: boolean }>`
  background: ${({ flag }) =>
    flag ? theme.color.white : theme.color.lightblack};
  color: ${({ flag }) => (flag ? theme.color.black : theme.color.white)};
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export default ButtonTab;
