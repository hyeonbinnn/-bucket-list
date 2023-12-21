import React from 'react';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.Footer>
      <S.Container className="max-width">
        <S.H2>© Weniv Corp.</S.H2>
        <S.TopButton className="top-button">TOP</S.TopButton>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
