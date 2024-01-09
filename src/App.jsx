import "./App.css";
import LikePost from "./components/LikePost";
import LikeImage from "./components/LikeImage";
import RenderProps from "./components/RenderProps";
import LikeImagePart2 from "./components/LikeImagePart2";
import LikePostPart2 from "./components/LikePostPart2";

function App() {
  return (
    <div>
      <div>
        <h3>Some </h3>
        <LikeImage />
        <LikePost />
      </div>
      <div>
        <h3>Some Blog</h3>
        <RenderProps
          render={(count, handleCount) => (
            <LikeImagePart2 count={count} handleCount={handleCount} />
          )}
        />
        <RenderProps
          render={(count, handleCount) => (
            <LikePostPart2 count={count} handleCount={handleCount} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
