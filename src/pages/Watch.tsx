import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import VIdeoPlay from "../components/VIdeoPlay";
import SuggestionCard from "../components/Cards/SuggestionCard";
import { fetchComment, fetchVideos } from "../services/YoutubeService";
import { useParams } from "react-router-dom";
import { IHomeCard } from "./Home";
import CommentCard from "../components/Cards/CommentCard";
import { IVideoSearchParams } from "../interfaces/videoSearchParams";
import { ICommentParams } from "../interfaces/CommnetParam";

interface Iterm {
  term: string;
  onChange: (value: string) => void;
}
export interface Icomment {
  id: string;
  snippet: {
    topLevelComment: {
      snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        textDisplay: string;
        likeCount: number;
        publishedAt: string;
      };
    };
  };
}
const Watch = ({ term, onChange }: Iterm) => {
  const [suggestVideos, setSuggestVideos] = useState<IHomeCard[]>([]);
  const [comment, setComment] = useState<Icomment[]>([]);
  const [savePageToken, setSavePageToken] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");
  const [saveCommentToken, setSaveCommentToken] = useState("");
  const [CommentToken, setCommentToken] = useState("");
  const { vId } = useParams();

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setNextPageToken(savePageToken);
      // setCommentToken(saveCommentToken);
    }
  }, [setNextPageToken, savePageToken, saveCommentToken, setCommentToken]);

  const getVideo = useCallback(async (value: IVideoSearchParams) => {
    try {
      const data = await fetchVideos(value);
      const { nextPageToken, items } = data;
      setSavePageToken(nextPageToken);
      setSuggestVideos((prev) => [...prev, ...items]);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getComment = useCallback(async (commnetValue: ICommentParams) => {
    const commentData = await fetchComment(commnetValue);
    console.log(commentData);
    // setSaveCommentToken(commentData.nextPageToken);
    // setComment((prev) => [...prev, ...commentData.items]);
  }, []);

  useEffect(() => {
    getVideo({ q: term, pageToken: nextPageToken });
    getComment({ videoId: vId, pageToken: CommentToken });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getVideo, getComment, term, handleScroll, vId]);

  return (
    <WatchWrapper>
      <WatchVideo>
        <VIdeoPlay id={vId} />
        <CommentWrapper>
          {comment.map((comment: Icomment, index) => {
            return <CommentCard comment={comment} key={index} />;
          })}
        </CommentWrapper>
      </WatchVideo>
      <Suggestion>
        {suggestVideos.map((video: IHomeCard, index) => {
          return (
            <SuggestionCard video={video} key={index} onChange={onChange} />
          );
        })}
      </Suggestion>
    </WatchWrapper>
  );
};

const CommentWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 1190px) {
    display: none;
  }
`;

const WatchVideo = styled.div`
  max-width: 853px;
`;
const Suggestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 25%;
`;
const WatchWrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
`;

export default Watch;
