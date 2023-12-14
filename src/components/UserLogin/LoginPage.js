import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/authActions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.posts.loginError);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    dispatch(loginUser(loginData));
    navigate('/');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        {loginError && <p className="error-message">Invalid Email Or Password</p>}
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <button type="button" className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </form>
        <Link className="create-new-use" to="/register">
          Create New User
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
