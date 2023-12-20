import React from 'react';
import { Link } from 'react-router-dom';
import imgLogin from '../../../assets/icon-login.svg';
import imgRegister from '../../../assets/icon-register.svg';

const Logout = () => {
  return (
    <>
      <li>
        <Link to="#" className="button gray">
          <img src={imgLogin} alt="Login" />
          <span>Login</span>
        </Link>
      </li>
      <li className="only-pc">
        <Link to="#" className="button gray">
          <img src={imgRegister} alt="Register" />
          <span>Register</span>
        </Link>
      </li>
    </>
  );
};

export default Logout;
