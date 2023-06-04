import React from "react";
import { useParams } from "react-router-dom";

const VIdeoPlay = () => {
  const { vId } = useParams();
  return (
    <div>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${vId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default VIdeoPlay;
