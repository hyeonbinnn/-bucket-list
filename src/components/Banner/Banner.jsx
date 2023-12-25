import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './Banner.style';

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

  return (
    <div>
      {blogInfo === undefined ? (
        <div>로딩중...</div>
      ) : (
        <S.Banner className="banner">
          <div className="max-width">
            <S.BannerContents className="banner-contents">
              <S.SubText className="sub-text">{blogInfo.subTitle}</S.SubText>
              <S.MainText className="main-text">{blogInfo.mainTitle}</S.MainText>
              <S.Description className="description">{blogInfo.description}</S.Description>
            </S.BannerContents>
          </div>
        </S.Banner>
      )}
    </div>
  );
};

export default Banner;
