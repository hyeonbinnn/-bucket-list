import React, { useEffect, useState, useContext } from 'react';
import UserContext from './../../context/UserContext';
import axios from 'axios';
import { About } from './About/About';
import Posts from './Posts/Posts';
import './Main.css';

const Main = () => {
  const [posts, setPosts] = useState();
  const { isLogin } = useContext(UserContext);

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then((json) => {
        setPosts(json.data);
      })
      .catch((error) => {
        console.log('데이터 불러오는 중 에러 발생', error);
      });
  }, []);

  // console.log(posts);

  return (
    <main>
      {posts !== undefined ? (
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
            <Posts posts={posts} />
          </ul>
          {isLogin ? <About /> : <></>}
        </div>
      ) : null}
    </main>
  );
};

export default Main;
