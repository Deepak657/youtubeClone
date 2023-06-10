import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";
import { Icomment } from "../../pages/Watch";
import { BiLike, BiDislike } from "react-icons/bi";
import moment from "moment";

interface Iprops {
  comment: Icomment;
}
const CommentCard = ({ comment }: Iprops) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    textDisplay,
    publishedAt,
    likeCount,
  } = comment.snippet.topLevelComment.snippet;
  return (
    <CommentCardWrapper>
      <Image src={authorProfileImageUrl} alt="" />
      <div>
        <Auther>
          {authorDisplayName}
          <Span>{moment(publishedAt).fromNow()}</Span>
        </Auther>
        <Description>{textDisplay}</Description>
        <Icon>
          <Like>
            <BiLike />
            {likeCount > 0 && likeCount}
          </Like>
          <BiDislike />
        </Icon>
      </div>
    </CommentCardWrapper>
  );
};

const Like = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
const Icon = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  color: ${theme.color.white};
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
  margin-top: 6px;
  font-size: 14px;
  color: ${theme.color.white};
`;

export default CommentCard;
