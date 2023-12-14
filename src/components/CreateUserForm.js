import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/postActions';

const CreateUserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
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
    dispatch(createUser(JSON.stringify(formData)));
  };
  

  return (
    <div className="container">
      <div className="form-container">
        <h2>User Registration</h2>
        <form className="user-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            required
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            required
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            required
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleInputChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
