import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VIdeoPlay from "../components/VIdeoPlay";
import SuggestionCard from "../components/Cards/SuggestionCard";
import { fetchVideo, fetchComment } from "../services/YoutubeService";
import { useParams } from "react-router-dom";
import { IProps } from "./Home";
import CommentCard from "../components/Cards/CommentCard";

interface Iterm {
  term: string;
}
interface Icomment {
  id: string;
  snippet: {
    topLevelComment: {
      snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        textDisplay: string;
      };
    };
  };
}
const Watch = ({ term }: Iterm) => {
  const [suggestVideos, setSuggestVideos] = useState<IProps[]>([]);
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

  useEffect(() => {
    if (!term || !vId) {
      return;
    }
    const getVideo = async () => {
      try {
        const video = await fetchVideo({ results, term });
        const comment = await fetchComment(results, vId);
        setSuggestVideos(video);
        setComment(comment);
        console.log(comment);
      } catch (err) {
        console.error(err);
      }
    };
    getVideo();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [results, term, vId]);

  return (
    <WatchWrapper>
      <WatchVideo>
        <VIdeoPlay id={vId} />
        <CommentWrapper>
          {comment.map((comment) => {
            return (
              <CommentCard
                key={comment.id}
                image={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                auther={
                  comment.snippet.topLevelComment.snippet.authorDisplayName
                }
                discription={
                  comment.snippet.topLevelComment.snippet.textDisplay
                }
              />
            );
          })}
        </CommentWrapper>
      </WatchVideo>
      <Suggestion>
        {suggestVideos.map((video) => {
          return (
            <SuggestionCard
              key={video.id.videoId}
              id={video.id.videoId}
              image={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
            />
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
  width: 65%;
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
  gap: 5px;
`;

export default Watch;
