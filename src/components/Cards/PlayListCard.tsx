import React from "react";
import styled from "styled-components";
import { RiPlayList2Fill } from "react-icons/ri";
import { theme } from "../../Theme";

const PlayListCard = () => {
  return (
    <PlayListCardWrapper>
      <Image
        src="https://i.ytimg.com/vi/1VK9yV9rWb4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCjtjS1ZTV-I2sBt3Cr6rYGTkCOcg"
        alt=""
      />
      <PlayListMenu>
        <RiPlayList2Fill />1 video
      </PlayListMenu>
      <PlayListName>Punjabi Songs</PlayListName>
    </PlayListCardWrapper>
  );
};
const PlayListName = styled.div`
  margin-top: 20px;
  color: ${theme.color.white};
  font-size: 14px;
`;

const PlayListMenu = styled.div`
  color: ${theme.color.white};
  position: relative;
  margin-top: -51px;
  border-radius: 0 0 10px 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background: #303030;
`;

const PlayListCardWrapper = styled.div`
  width: 300px;
`;
export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export default PlayListCard;
