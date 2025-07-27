import React from "react";
import "../App.css"; // Make sure you have styles in App.css

const ReactionIcons = ({ reactions, onReact, active }) => {
  return (
    <div className="reactions">
      <button
        onClick={() => onReact("like")}
        className={active === "like" ? "active" : ""}
      >
        👍 {reactions.like}
      </button>
      <button
        onClick={() => onReact("love")}
        className={active === "love" ? "active" : ""}
      >
        ❤️ {reactions.love}
      </button>
      <button
        onClick={() => onReact("wow")}
        className={active === "wow" ? "active" : ""}
      >
        😮 {reactions.wow}
      </button>
    </div>
  );
};

export default ReactionIcons;
