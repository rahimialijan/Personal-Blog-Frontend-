import React, { useState, useEffect } from 'react';

const EditModal = ({ show, onClose, onSubmit, post }) => {
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
    <div className={`modal ${show ? 'show' : ''}`}>
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
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
