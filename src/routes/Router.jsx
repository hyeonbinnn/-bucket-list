import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Home } from '../pages/Home/Home';
import Post from './../pages/Post/Post';

const Router = () => {
  const [userId, setUserId] = useState(1);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <UserContext.Provider value={{ userId, isLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default Router;
