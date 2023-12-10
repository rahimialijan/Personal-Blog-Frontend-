import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts, updatePost } from "../redux/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editedFormData, setEditedFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleUpdatePost = (post) => {
    setSelectedPost(post);
    setEditedFormData({
      title: post.title,
      author: post.author,
      content: post.content,
    });

    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditedFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditFormSubmit = () => {
    dispatch(updatePost({ postId: selectedPost.id, formData: editedFormData }));
    setShowEditModal(false);
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
          <p>
            {post.content
              ? `${post.content.slice(0, 50)}...`
              : "No content available"}
          </p>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          <button onClick={() => handleUpdatePost(post)}>Update</button>
        </div>
      ))}

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Post</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="edit-title">Title:</label>
              <input
                id="edit-title"
                type="text"
                name="title"
                value={editedFormData.title}
                onChange={handleEditFormChange}
              />

              <label htmlFor="edit-author">Author:</label>
              <input
                id="edit-author"
                type="text"
                name="author"
                value={editedFormData.author}
                onChange={handleEditFormChange}
              />

              <label htmlFor="edit-content">Content:</label>
              <textarea
                id="edit-content"
                name="content"
                value={editedFormData.content}
                onChange={handleEditFormChange}
              />

              <button onClick={handleEditFormSubmit}>Save Changes</button>
              <button onClick={handleEditModalClose}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
