import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/postActions';

const LoginPage = () => {
  const dispatch = useDispatch();
 
  const loginError = useSelector((state) => state.posts.loginError);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    dispatch(loginUser(loginData));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {loginError && <p className="error-message">Invalid Email Or Password</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Email:
          <input
            type="text"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
        </label>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};


export default LoginPage;