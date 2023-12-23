import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './Post.style';
// import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Author from '../../components/Main/Author/Author';

const Post = () => {
  // const location = useLocation();
  // console.log(location);
  // const postNumber = location.pathname.split('/')[2];
  const { id } = useParams();
  const [post, setPost] = useState(undefined);

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

      <S.PostSection>
        <div>
          <S.PostAuthor>
            <S.PostProfileImg src={post.profileImg} alt="profileImg" />
            {post.userName}
            <S.PostCreated>{post.created}</S.PostCreated>
          </S.PostAuthor>
          <div>
            <S.PostCategory>{post.category}</S.PostCategory>
            <S.PostTitle>{post.title}</S.PostTitle>
          </div>
        </div>

        <S.ContentsWrap>
          {post.contents.map((content, index) => (
            <p key={index}>{content.text}</p>
          ))}
        </S.ContentsWrap>
      </S.PostSection>
      <Footer />
    </>
  );
};

export default Post;
