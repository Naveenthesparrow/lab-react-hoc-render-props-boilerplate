import React from "react";

export default function LikePostPart2(props) {
  const { count, handleCount } = props;
  return (
    <div>
      <button onClick={handleCount}>Post - {count}</button>
    </div>
  );
}
