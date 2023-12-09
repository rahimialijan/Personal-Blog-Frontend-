import React from "react";

import { Link } from "react-router-dom";

const Home = ({posts}) => {
    console.log('Home component rendered');
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p> Author: {post.author}</p>
          <p>{post.content.slice(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
