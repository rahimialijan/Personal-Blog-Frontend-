import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './EditModal.css';

const EditModal = ({
  show, onClose, onSubmit, post,
}) => {
  const [editedFormData, setEditedFormData] = useState({
    title: '',
    author: '',
    content: '',
  });

  useEffect(() => {
    if (post) {
      setEditedFormData({
        title: post.title,
        author: post.author,
        content: post.content,
      });
    }
  }, [post]);

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditedFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditFormSubmit = () => {
    onSubmit(editedFormData);
  };

  return (
    <div className={`modal-overlay ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <h2>Edit Post</h2>
        <form className="updat-form" onSubmit={(e) => e.preventDefault()}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="edit-title">Title:</label>
          <input
            id="edit-title"
            type="text"
            name="title"
            value={editedFormData.title}
            onChange={handleEditFormChange}
          />

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="edit-author">Author:</label>
          <input
            id="edit-author"
            type="text"
            name="author"
            value={editedFormData.author}
            onChange={handleEditFormChange}
          />

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="edit-content">Content:</label>
          <textarea
            id="edit-content"
            name="content"
            value={editedFormData.content}
            onChange={handleEditFormChange}
          />

          <button type="button" onClick={handleEditFormSubmit}>
            Save Changes
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

EditModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

EditModal.defaultProps = {
  post: null,
};

export default EditModal;
