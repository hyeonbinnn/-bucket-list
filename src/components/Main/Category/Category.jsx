import React from 'react';
import './Category.css';

const Category = ({ category }) => {
  return (
    <>
      <dl className="category">
        <dt className="a11y-hidden">Category</dt>
        <dd>Life</dd>
        <dd>Style</dd>
      </dl>
    </>
  );
};

export default Category;
