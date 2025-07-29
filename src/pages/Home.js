// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts";
import PaginationBar from "../components/PaginationBar";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie Review Blog</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/review/${post.id}`}>Read Full Review</Link>
        </div>
      ))}

      {/* Pagination bar at bottom */}
      <PaginationBar />
    </div>
  );
};

export default Home;
