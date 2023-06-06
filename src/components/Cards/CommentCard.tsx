import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";

interface Iprops {
  image: string;
  auther: string;
  discription: string;
}
const CommentCard = (props: Iprops) => {
  const { image, auther, discription } = props;
  return (
    <CommentCardWrapper>
      <Image src={image} alt="" />
      <div>
        <Auther>
          {auther}
          <Span>2 weeks ago</Span>{" "}
        </Auther>
        <Description>{discription}</Description>
      </div>
    </CommentCardWrapper>
  );
};

const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const CommentCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const Span = styled.span`
  color: ${theme.color.lightwhite};
  font-size: 12px;
`;
const Auther = styled.div`
  font-size: 14px;
  color: ${theme.color.white};
  display: flex;
  gap: 5px;
  align-items: baseline;
`;
const Description = styled.div`
  font-size: 14px;
  color: ${theme.color.white};
`;

export default CommentCard;
