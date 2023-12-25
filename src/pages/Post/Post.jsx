import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './Post.style';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import View from '../../components/View/View';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((json) => {
        setPost(json.data);
      })
      .catch((error) => {
        console.log('데이터 불러오는 중 에러 발생', error);
      });
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <S.PostBanner className="banner" mainBg={post.mainBg}>
        <div className="max-width">
          <S.PostBannerContents className="banner-contents">
            <span>오늘 날짜 영어로 넣기</span>
          </S.PostBannerContents>
        </div>
      </S.PostBanner>
      <View post={post} />
      <Footer />
    </>
  );
};

export default Post;
