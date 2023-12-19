import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [posts, setPosts] = useState();

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

  console.log(posts);

  return (
    <div>
      Home
      {posts && posts.map((post) => <h2 key={post.id}>{post.title}</h2>)}
    </div>
  );
};
