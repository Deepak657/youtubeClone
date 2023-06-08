import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import VIdeoPlay from "../components/VIdeoPlay";
import SuggestionCard from "../components/Cards/SuggestionCard";
import { fetchVideo, fetchComment } from "../services/YoutubeService";
import { useParams } from "react-router-dom";
import { IHomeCard } from "./Home";
import CommentCard from "../components/Cards/CommentCard";

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

  const { vId } = useParams();
  const [results, setResults] = useState(10);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setResults((prev) => prev + 10);
    }
  };
  const getVideo = useCallback(async () => {
    if (!term || !vId) {
      return;
    }
    try {
      const video = await fetchVideo({ results, term });
      const comment = await fetchComment(results, vId);
      setSuggestVideos(video);
      setComment(comment);
      // console.log(comment);
    } catch (err) {
      console.error(err);
    }
  }, [results, term, vId]);

  useEffect(() => {
    getVideo();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getVideo]);

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
`;

const WatchVideo = styled.div`
  width: 853px;
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
`;

export default Watch;
