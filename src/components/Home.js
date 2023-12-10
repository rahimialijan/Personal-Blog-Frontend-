import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts, updatePost } from '../redux/postSlice';
import EditModal from './EditeModal';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleUpdatePost = (post) => {
    setSelectedPost(post);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setSelectedPost(null); 
  };

  const handleEditFormSubmit = (editedFormData) => {
    dispatch(updatePost({ postId: selectedPost.id, formData: editedFormData }));
    setShowEditModal(false);
    setSelectedPost(null); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts || posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={`${post.id}-${Math.random()}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>
            Author:
            <span>{post.author}</span>
          </p>
          <p>{post.content ? `${post.content.slice(0, 50)}...` : 'No content available'}</p>
          <button onClick={() => handleUpdatePost(post)}>Update</button>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </div>
      ))}

      {showEditModal && (
        <EditModal
          show={showEditModal}
          onClose={handleEditModalClose}
          onSubmit={handleEditFormSubmit}
          post={selectedPost}
        />
      )}
    </div>
  );
};

export default Home;

