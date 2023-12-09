import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/postSlice';
import { useDispatch, useSelector } from 'react-redux';



const Home = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) =>state.posts.loading);

  useEffect(() =>{
    dispatch(fetchPosts())
  }, [dispatch])

  if (loading){
    return <div>loading...</div>
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>
            {' '}
            Author:
            {post.author}
          </p>
          <p>
            {post.content.slice(0, 50)}
            ...
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
