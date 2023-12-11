import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  if (loading) {
    return <div>loading...</div>;
  }

  const post = posts.find((post) => post.id === parseInt(postId, 10));

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <div>
      <h2>
        Post
        {' '}
        {postId}
        {' '}
        Details
      </h2>
      <h3>{post.title}</h3>
      <p>
        Author:
        {' '}
        {post.author}
      </p>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;
