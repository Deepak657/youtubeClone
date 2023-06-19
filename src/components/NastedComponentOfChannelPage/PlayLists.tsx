import React, { useEffect, useCallback, useState } from "react";
import PlayListCard from "../Cards/PlayListCard";
import { fetchChannelPlaylist, fetchPlayList } from "../../redux/Api";
import { useParams } from "react-router-dom";
import { IVideoSearchParams } from "../../interfaces/videoSearchParams";
import styled from "styled-components";

interface Iitems {
  id: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    title: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

export interface IPlaylist {
  items: Iitems[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
  };
  imgUrl: string;
  mainTitle: string;
}

const PlayLists = () => {
  const { channelId } = useParams();
  const [playlist, setPlaylist] = useState<IPlaylist[]>([]);
  const getPlaylist = useCallback(async (value: IVideoSearchParams) => {
    const res = await fetchChannelPlaylist(value);

    res.map(async (item: any) => {
      const resData = await fetchPlayList(item.id.playlistId);
      const modifiedPlaylist = {
        ...resData,
        imgUrl: item.snippet.thumbnails.high.url,
        mainTitle: item.snippet.title,
      };
      setPlaylist((prevState) => {
        prevState = [...prevState, modifiedPlaylist];
        return prevState;
      });
    });
  }, []);

  useEffect(() => {
    getPlaylist({ channelId: channelId, type: "playlist" });
  }, [channelId]);
  return (
    <PlayListsWrapper>
      {playlist.map((item, index) => {
        return <PlayListCard item={item} key={index} />;
      })}
    </PlayListsWrapper>
  );
};

const PlayListsWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export default PlayLists;
