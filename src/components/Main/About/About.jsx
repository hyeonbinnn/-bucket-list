import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import * as S from './About.style';
import UserContext from '../../../context/UserContext';
import imgFacebook from '../../../assets/Facebook.svg';
import imgTwitter from '../../../assets/Twitter.svg';
import imgInstagram from '../../../assets/Instagram.svg';
import imgGitHub from '../../../assets/Github.svg';

export const About = () => {
  const [userData, setUserData] = useState();
  const { userId } = useContext(UserContext);

  const snsImage = { imgFacebook, imgTwitter, imgInstagram, imgGitHub };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${userId}`)
      .then((json) => {
        setUserData(json.data);
      })
      .catch((error) => {
        console.log('데이터 불러오는 중 에러 발생', error);
      });
  }, []);

  // console.log(userData);

  return (
    <>
      {userData !== undefined ? (
        <S.About className="about">
          <h2>About Me</h2>
          <S.UserProfile src={userData.profileImg} alt="profileImg" className="user-profile" />
          <S.UserName className="user-name">{userData.name}</S.UserName>
          <S.UserDescription className="user-description">{userData.userInfo}</S.UserDescription>

          <h3>Categories</h3>
          <S.Categories className="categories">
            {userData.category.map((c, index) => (
              <li key={index}>
                <S.CategoryLink to="/">{c}</S.CategoryLink>
              </li>
            ))}
          </S.Categories>

          <h3>Follow</h3>
          <S.Sns className="sns">
            {Object.keys(userData.sns).map((s, index) => (
              <li key={index}>
                <S.SnsLink to="">
                  <S.SnsImg src={snsImage['img' + s]} alt={s} />
                </S.SnsLink>
              </li>
            ))}
          </S.Sns>
        </S.About>
      ) : (
        <></>
      )}
    </>
  );
};
