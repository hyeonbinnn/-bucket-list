import React from 'react';
import { useContext } from 'react';
import UserContext from './../../context/UserContext';
import imgLogo from '../../assets/Logo.svg';
import Login from '../Header/Login/Login';
import Logout from '../Header/Logout/Logout';
import * as S from './Header.style';

const Header = () => {
  const { isLogin } = useContext(UserContext);

  return (
    <S.Header>
      <S.Container className="max-width">
        <S.H1>
          <S.HeaderLink to="/">
            <S.HeaderImg src={imgLogo} alt="My Blog" />
          </S.HeaderLink>
        </S.H1>
        <S.HeaderUl>{isLogin ? <Login /> : <Logout />}</S.HeaderUl>
      </S.Container>
    </S.Header>
  );
};

export default Header;
