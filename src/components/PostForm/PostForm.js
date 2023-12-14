import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createPost } from '../../redux/postActions';
import './PostForm.css';
import LoginPage from '../UserLogin/LoginPage';

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.posts.isAuthenticated);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
  });

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(formData));
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="container">
        <div className="form-container">
          <p>You are not logged in. Please log in to create a new post.</p>
          <LoginPage />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-container">
        <Link className="back-link" to="/">back</Link>
        <h2>Create New Post</h2>
        <form className="post-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            required
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author:</label>
          <input
            required
            id="author"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
          <label htmlFor="content">Content:</label>
          <textarea
            required
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
