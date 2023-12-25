import React from 'react';
import * as S from './Footer.style';

const Footer = () => {
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Footer>
      <S.Container className="max-width">
        <S.H2>© Weniv Corp.</S.H2>
        <S.TopButton onClick={moveToTop} className="top-button">
          TOP
        </S.TopButton>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
