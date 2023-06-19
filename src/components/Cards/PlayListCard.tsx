import React from "react";
import styled from "styled-components";
import { RiPlayList2Fill } from "react-icons/ri";
import { theme } from "../../Theme";
import { IPlaylist } from "../NastedComponentOfChannelPage/PlayLists";

interface Iprops {
  item: IPlaylist;
}
const PlayListCard = ({ item }: Iprops) => {
  const {
    pageInfo: { totalResults },
    imgUrl,
    mainTitle,
  } = item;
  return (
    <PlayListCardWrapper>
      <Image src={imgUrl} alt="" />
      <PlayListMenu>
        <RiPlayList2Fill />
        {totalResults} video
      </PlayListMenu>
      <PlayListName>{mainTitle}</PlayListName>
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
  cursor: pointer;
`;
export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export default PlayListCard;
