// src/pages/ReviewPage.js
import React, { useState } from "react";
import ReactionIcons from "../components/ReactionIcons";
import PaginationBar from "../components/PaginationBar";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

const ReviewPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  const [reactions, setReactions] = useState(post?.reactions || { like: 0, love: 0, wow: 0 });
  const [activeReaction, setActiveReaction] = useState(null);

  // New structure for comments: { text, reactions, activeReaction }
  const [comments, setComments] = useState(
    (post?.comments || []).map((text) => ({
      text,
      reactions: { like: 0, love: 0, wow: 0 },
      activeReaction: null,
    }))
  );

  const [newComment, setNewComment] = useState("");

  // React on post
  const handleReaction = (type) => {
    setReactions((prev) => {
      const updated = { ...prev };

      if (activeReaction === type) {
        updated[type] -= 1;
        setActiveReaction(null);
      } else {
        if (activeReaction) {
          updated[activeReaction] -= 1;
        }
        updated[type] += 1;
        setActiveReaction(type);
      }

      return updated;
    });
  };

  // React on comment
  const handleCommentReaction = (index, type) => {
    setComments((prev) =>
      prev.map((c, i) => {
        if (i !== index) return c;

        const updated = { ...c };
        const r = { ...updated.reactions };

        if (updated.activeReaction === type) {
          r[type] -= 1;
          updated.activeReaction = null;
        } else {
          if (updated.activeReaction) {
            r[updated.activeReaction] -= 1;
          }
          r[type] += 1;
          updated.activeReaction = type;
        }

        updated.reactions = r;
        return updated;
      })
    );
  };

  // Add new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        {
          text: newComment,
          reactions: { like: 0, love: 0, wow: 0 },
          activeReaction: null,
        },
      ]);
      setNewComment("");
    }
  };

  return post ? (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1> 
      {post.image && (
  <img
    src={post.image}
    alt={post.title}
    style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
  />
)}

      <p>
        Written by: <Link to={`/author/${post.author}`}>{post.author}</Link>
      </p>
      <p>{post.content}</p>

      <h3>💬 Comments:</h3>
      <ul>
        {comments.map((c, i) => (
          <li key={i} style={{ marginBottom: "10px" }}>
            <strong>{post.author}:</strong> {c.text}
            <div style={{ marginTop: "5px" }}>
              <ReactionIcons
                reactions={c.reactions}
                active={c.activeReaction}
                onReact={(type) => handleCommentReaction(i, type)}
              />
            </div>
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

      <PaginationBar />
    </div>
  ) : (
    <p>Post not found</p>
  );
};

export default ReviewPage;
