import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/postActions';
import './PostForm.css'

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
  });

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

  return (
    <div className='container'>
    <div className='form-container'>
      <Link className='back-link' to={'/'}>back</Link>
      <h2>Create New Post</h2>
      <form className='post-form' onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="title">Title:</label>
        <input
          required
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="author">Author:</label>
        <input
          required
          id="author"
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
