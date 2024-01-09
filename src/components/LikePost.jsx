import React from "react";
import Highorder from "./Highorder";

function LikePost(props) {
  const { likeImageCounter, handleLikeImageCount } = props;
  return (
    <div>
      <button onClick={handleLikeImageCount}>
        Like Post - {likeImageCounter}
      </button>
    </div>
  );
}

export default Highorder(LikePost);
