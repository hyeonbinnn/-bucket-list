import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Banner.css';

const Banner = () => {
  const [blogInfo, setBlogInfo] = useState(undefined);

  useEffect(() => {
    axios
      .get('http://localhost:3001/blog')
      .then((json) => {
        setBlogInfo(json.data);
      })
      .catch((error) => {
        console.error('블로그 정보를 가져오는 중 에러 발생', error);
        setBlogInfo(null);
      });
  }, []);
  // console.log(blogInfo);

  return (
    <div>
      {blogInfo === undefined ? (
        <div>로딩중...</div>
      ) : (
        <div className="banner">
          <div className="max-width">
            <div className="banner-contents">
              <p className="sub-text">{blogInfo.subTitle}</p>
              <p className="main-text">{blogInfo.mainTitle}</p>
              <p className="description">{blogInfo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
