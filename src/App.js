import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostDetails from './components/PostDetails';

function App() {
  const posts = [
    {
      id: 1,
      title: "First Post",
      author: "Alijan",
      content:
        "I'm Alijan, a computer science graduate and full-stack developer at Microverse. With a five-year background in IT and communication roles, I bring a diverse skill set to the table. My academic journey and industry experience have fueled my passion for lifelong learning and collaboration. I've honed my technical and communication skills, including proficiency in HTML, CSS, Ruby, JavaScript, and more. My github boasts over 20 projects, both solo and collaborative, and I've tackled 100+ coding challenges with global developers.",
    },

    {
      id: 2,
      title: "Second Post",
      author: "Rahimi",
      content:
        "My commitment to continuous improvement is a cornerstone of my professional identity. At Microverse, I've further developed my skills and knowledge in full-stack development, collaborating on real-world projects. I'm passionate about growth and problem-solving, making me a valuable asset in the dynamic world of technology.",
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path='/post/:postId' element={<PostDetails posts={posts}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
