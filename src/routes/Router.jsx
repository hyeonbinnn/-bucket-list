import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './../pages/HomePage/Home';
import { Post } from './../pages/PostPage/Post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
