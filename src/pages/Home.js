import React from "react";
import ReactionIcons from '../components/ReactionIcons';

import { Link } from "react-router-dom";
import posts from "../data/posts";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie Review Blog</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/review/${post.id}`}>Read Full Review</Link> {" "}
          
        </div>
      ))}
    </div>
  );
};

export default Home;
