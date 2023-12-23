import React from 'react';
import Category from '../Category/Category';
import Author from '../Author/Author';
import * as S from './Posts.style';

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>
          <S.PostLink to={`/post/${post.id}`} className="post">
            <article>
              <S.PostImg src={post.thumbnail} alt="thumbnail" />
              <S.ContentsWrap className="contents-wrap">
                <Category category={post.category} />
                <S.PostH3>{post.title}</S.PostH3>
                <Author
                  profileImg={post.profileImg}
                  userName={post.userName}
                  created={post.created}
                />
                <S.PostDescription className="post-description">
                  {post.contents[0].text}
                </S.PostDescription>
              </S.ContentsWrap>
            </article>
          </S.PostLink>
        </li>
      ))}
    </>
  );
};

export default Posts;
