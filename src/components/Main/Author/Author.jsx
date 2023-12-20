import React from 'react';
import './Author.css';

const Author = ({ profileImg, userName, created }) => {
  return (
    <>
      <dl className="author-wrap">
        <dt className="a11y-hidden">Author</dt>
        <dd className="author">
          <img src={profileImg} alt="profileImg" /> {userName}
        </dd>
        <dt className="a11y-hidden">Created</dt>
        <dd className="created">{created}</dd>
      </dl>
    </>
  );
};

export default Author;
