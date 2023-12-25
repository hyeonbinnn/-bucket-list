import React, { useEffect, useState, useContext } from 'react';
import UserContext from './../../context/UserContext';
import axios from 'axios';
import { About } from './About/About';
import Posts from './Posts/Posts';
import * as S from './Main.style';

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

  return (
    <main>
      {posts !== undefined ? (
        <S.Container className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <S.Posts className="posts">
            <Posts posts={posts} />
          </S.Posts>
          {isLogin ? <About /> : <></>}
        </S.Container>
      ) : null}
    </main>
  );
};

export default Main;
