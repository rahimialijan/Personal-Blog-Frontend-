import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import store from './store';
import PostForm from './components/PostForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/post-form" element={<PostForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
