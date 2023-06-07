import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";
import { Icomment } from "../../pages/Watch";

interface Iprops {
  comment: Icomment;
}
const CommentCard = ({ comment }: Iprops) => {
  const { authorDisplayName, authorProfileImageUrl, textDisplay } =
    comment.snippet.topLevelComment.snippet;
  return (
    <CommentCardWrapper>
      <Image src={authorProfileImageUrl} alt="" />
      <div>
        <Auther>
          {authorDisplayName}
          <Span>2 weeks ago</Span>{" "}
        </Auther>
        <Description>{textDisplay}</Description>
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
