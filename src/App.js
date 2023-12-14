import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import store from './store';
import PostForm from './components/PostForm/PostForm';
import CreateUserForm from './components/UserLogin/CreateUserForm';
import LoginPage from './components/UserLogin/LoginPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/post-form" element={<PostForm />} />
          <Route path="/register" element={<CreateUserForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
