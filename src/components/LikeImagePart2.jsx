import React from "react";

export default function LikeImagePart2(props) {
  const { count, handleCount } = props;

  return (
    <div>
      <button onClick={handleCount}>Image - {count}</button>
    </div>
  );
}
