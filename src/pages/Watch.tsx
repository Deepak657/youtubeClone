import React, { useEffect } from "react";
import styled from "styled-components";
import VIdeoPlay from "../components/VIdeoPlay";
import SuggestionCard from "../components/Cards/SuggestionCard";
import { useParams } from "react-router-dom";
import CommentCard from "../components/Cards/CommentCard";
import { useGSelector } from "../redux/Store";
import { useDispatch } from "react-redux";
import { fetchSuggestionVidoeStart } from "../redux/actions/SuggestionVideoActions";
import { fetchCommentStart } from "../redux/actions/CommentAction";

const Watch = () => {
  const { vId } = useParams();
  const dispatch = useDispatch();
  const {
    commentData: { comments },
    suggestionData: { suggetionVideos },
  } = useGSelector((state) => state);

  // console.log(homeVideos);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      dispatch(
        fetchSuggestionVidoeStart({
          type: "video",
          relatedToVideoId: vId,
          pageToken: vId && suggetionVideos.get(vId)?.nextPageToken,
        })
      );
      dispatch(
        fetchCommentStart({
          videoId: vId,
          pageToken: vId && comments.get(vId)?.nextPageToken,
        })
      );
    }
  };

  useEffect(() => {
    if (vId && suggetionVideos.has(vId)) {
      return;
    }
    dispatch(
      fetchSuggestionVidoeStart({
        type: "video",
        relatedToVideoId: vId,
      })
    );
  }, [vId, suggetionVideos]);

  useEffect(() => {
    if (vId && comments.has(vId)) {
      return;
    }
    dispatch(fetchCommentStart({ videoId: vId }));
  }, [vId, comments]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <WatchWrapper>
      <WatchVideo>
        <VIdeoPlay id={vId} />
        <CommentWrapper>
          {vId &&
            comments.get(vId)?.items.map((comment, index) => {
              return <CommentCard comment={comment} key={index} />;
            })}
        </CommentWrapper>
      </WatchVideo>
      <Suggestion>
        {vId &&
          suggetionVideos.get(vId)?.items.map((video, index) => {
            return <SuggestionCard video={video} key={index} />;
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
