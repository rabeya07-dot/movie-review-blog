import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

const AuthorPage = () => {
  const { author } = useParams();
  const authorPosts = posts.filter((p) => p.author === author);

  return (
    <div className="author-page">
      <h2>👤 Author Profile: {author}</h2>

      <p>
        Welcome to <strong>{author}'s</strong> page. Here you’ll find all the movie reviews written by <strong>{author}</strong>.
      </p>

      {authorPosts.length > 0 ? (
        <ul>
          {authorPosts.map((p) => (
            <li key={p.id}>
              <Link to={`/review/${p.id}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found for this author.</p>
      )}
    </div>
  );
};

export default AuthorPage;
