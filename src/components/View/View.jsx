import React from 'react';
import * as S from './View.style';
import Category from '../Main/Category/Category';
import Author from '../Main/Author/Author';

const View = ({ post }) => {
  const customAuthorStyle = {
    height: '6.4rem',
    fontSize: '1.4rem',
  };

  const customCategoryStyle = {
    margin: '2rem 0 1rem 0',
  };

  return (
    <S.PostContainer className="max-width">
      <S.PostSection className="wrap-box">
        <S.PostInner className="inner">
          <Author
            profileImg={post.profileImg}
            userName={post.userName}
            created={post.created}
            style={customAuthorStyle}
          />
          <Category category={post.category} style={customCategoryStyle} />

          <S.TitleWrap className="title-wrap">
            <S.TitleH2>{post.title}</S.TitleH2>
            <S.TitleBtn className="btn-like">Like</S.TitleBtn>
          </S.TitleWrap>
          <hr />

          <S.ContentsWrap>
            {post.contents.map((content, index) => (
              <div key={index}>
                {content.type === 'p' && <S.ContentsP>{content.text}</S.ContentsP>}
                {content.type === 'img' && <S.ContentsImg src={content.src} alt={`Bg ${index}`} />}
              </div>
            ))}
          </S.ContentsWrap>

          <S.BtnGroup className="btn-group">
            <S.ModifyBtn to="#" className="btn-modify">
              <span className="a11y-hidden">modify</span>
            </S.ModifyBtn>
            <S.DeleteBtn type="button" className="btn-delete">
              <span className="a11y-hidden">delete</span>
            </S.DeleteBtn>
          </S.BtnGroup>

          <S.BackLink to="/" className="btn-back">
            <span className="a11y-hidden">Back</span>
          </S.BackLink>
        </S.PostInner>
      </S.PostSection>
    </S.PostContainer>
  );
};

export default View;
