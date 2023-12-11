import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts, updatePost } from "../redux/postActions";
import EditModal from "./EditeModal";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="main-container">
      <div className="navigation-container">
        <div className="nav-links">
          <Link className="homepage-link" to={"/"}>
            Home Page
          </Link>
          <Link className="new-post-link" to={"/post-form"}>
            Create New Post
          </Link>
        </div>
        <h1 className="blog-post-title">Blog Posts</h1>
      </div>
      <div className="grid-container">
        {posts.map((post) => (
          <div className="post-card" key={`${post.id}-${Math.random()}`}>
            <h3 className="post-title">{post.title}</h3>
            <p className="p-author">Author: {post.author}</p>
            <p className="p-content">
              {post.content
                ? `${post.content.slice(0, 80)}...`
                : "No content available"}
              {post.content && (
                <Link to={`/post/${post.id}`}>
                  <h5 className="see-more">see more</h5>
                </Link>
              )}
            </p>
            <div className="btn-container">
              <button
                className="update-btn"
                type="button"
                onClick={() => handleUpdatePost(post)}
              >
                Update
              </button>
              <button
                className="delete-btn"
                type="button"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

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
