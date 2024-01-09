import React from "react";
import Highorder from "./Highorder";

function LikeImage(props) {
  const { likeImageCounter, handleLikeImageCount } = props;

  return (
    <div>
      <button onClick={handleLikeImageCount}>
        Like Image - {likeImageCounter}
      </button>
    </div>
  );
}

export default Highorder(LikeImage);
