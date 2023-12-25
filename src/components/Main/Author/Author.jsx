import React from 'react';
import * as S from './Author.style';

const Author = ({ profileImg, userName, created, style }) => {
  return (
    <>
      <S.AuthorWrap className="author-wrap" style={style}>
        <dt className="a11y-hidden">Author</dt>
        <S.Author className="author">
          <S.ProfileImg src={profileImg} alt="profileImg" /> {userName}
        </S.Author>
        <dt className="a11y-hidden">Created</dt>
        <S.Created className="created">{created}</S.Created>
      </S.AuthorWrap>
    </>
  );
};

export default Author;
