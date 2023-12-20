import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const location = useLocation();
  // console.log(location);
  const postNumber = location.pathname.split('/')[2];
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${postNumber}`)
      .then((json) => {
        setPost(json.data);
      })
      .catch((error) => {
        setPost(null);
        console.log('데이터 불러오는 중 에러 발생', error);
      });
  }, []);

  // console.log(post);

  return (
    <div>
      {post === undefined ? (
        <div>로딩중...</div>
      ) : post === null ? (
        <div>404</div>
      ) : (
        <div>{post.title}</div>
      )}
    </div>
  );
};

export default Post;
