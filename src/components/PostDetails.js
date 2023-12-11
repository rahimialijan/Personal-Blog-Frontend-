import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate, useParams } from 'react-router-dom';
import { fetchPosts } from '../redux/postActions';
import './PostDetails.css';

const PostDetails = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts());
    }

    const currentPost = posts.find((p) => p.id === parseInt(postId));
    setPost(currentPost);
  }, [dispatch, postId, posts]);

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <div className='details-container'>
      <div className='post-details-container'>
        <h2 className='post-title'>{post.title} Details</h2>
        <p className='post-author'>Author: {post.author}</p>
        <p className='post-content'>{post.content}</p>
      </div>
      <div className='button-container'>
        <button className='back-button' onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
