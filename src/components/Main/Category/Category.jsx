import React from 'react';
import * as S from './Category.style';

const Category = ({ category, style }) => {
  return (
    <>
      <S.Category className="category" style={style}>
        <dt className="a11y-hidden">Category</dt>
        {category.map((item, index) => (
          <S.Item key={index}>{item}</S.Item>
        ))}
      </S.Category>
    </>
  );
};

export default Category;
