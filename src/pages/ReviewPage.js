import React, { useState } from "react";
import ReactionIcons from "../components/ReactionIcons";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

const ReviewPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  const [reactions, setReactions] = useState(post?.reactions || { like: 0, love: 0, wow: 0 });
  const [activeReaction, setActiveReaction] = useState(null);
  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleReaction = (type) => {
    setReactions((prev) => {
      const updated = { ...prev };
      if (activeReaction) {
        updated[activeReaction] -= 1;
      }
      updated[type] += 1;
      return updated;
    });
    setActiveReaction(type);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return post ? (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>

      {/* ✅ Show author name with link to profile */}
      <p>
        Written by: <Link to={`/author/${post.author}`}>{post.author}</Link>
      </p>

      <p>{post.content}</p>

      <h3>💬 Comments:</h3>
      <ul>
        {comments.map((c, i) => (
          <li key={i}>
            <strong>{post.author}:</strong> {c}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment"
        style={{ padding: "5px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleAddComment} style={{ padding: "5px 10px" }}>
        Add Comment
      </button>

      <h3 style={{ marginTop: "20px" }}>❤️ Reactions:</h3>
      <ReactionIcons
        reactions={reactions}
        onReact={handleReaction}
        active={activeReaction}
      />
    </div>
  ) : (
    <p>Post not found</p>
  );
};

export default ReviewPage;
