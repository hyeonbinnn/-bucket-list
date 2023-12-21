import React from 'react';
import imgProfile from '../../../assets/profile.jpg';
import imgModify from '../../../assets/icon-modify-white.svg';
import imgLogout from '../../../assets/icon-logout.svg';
import { ProfileLink, ProfileImg } from '../Header.style';
import { ButtonLink, ButtonImg, ButtonWhite } from '../Button.style';

const Login = () => {
  return (
    <>
      <li className="profile-img">
        <ProfileLink to="#">
          <ProfileImg src={imgProfile} alt="My Page" />
        </ProfileLink>
      </li>
      <li>
        <ButtonLink to="#" className="button">
          <ButtonImg src={imgModify} alt="Modify" />
          <span>Write</span>
        </ButtonLink>
      </li>
      <li>
        <ButtonWhite to="#" className="button white">
          <ButtonImg src={imgLogout} alt="Logout" />
          <span>Logout</span>
        </ButtonWhite>
      </li>
    </>
  );
};

export default Login;
