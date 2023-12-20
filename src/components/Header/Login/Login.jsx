import React from 'react';
import { Link } from 'react-router-dom';
import imgProfile from '../../../assets/profile.jpg';
import imgModify from '../../../assets/icon-modify-white.svg';
import imgLogout from '../../../assets/icon-logout.svg';

const Login = () => {
  return (
    <>
      <li className="profile-img">
        <Link to="#">
          <img src={imgProfile} alt="My Page" />
        </Link>
      </li>
      <li>
        <Link to="#" className="button">
          <img src={imgModify} alt="Modify" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white">
          <img src={imgLogout} alt="Logout" />
          <span>Logout</span>
        </button>
      </li>
    </>
  );
};

export default Login;
