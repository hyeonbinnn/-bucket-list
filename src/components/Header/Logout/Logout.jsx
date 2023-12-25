import React from 'react';
import imgLogin from '../../../assets/icon-login.svg';
import imgRegister from '../../../assets/icon-register.svg';
import { ButtonGray, ButtonImg, OnlyPc } from '../Button.jsx';

const Logout = () => {
  return (
    <>
      <li>
        <ButtonGray to="#" className="button gray">
          <ButtonImg src={imgLogin} alt="Login" />
          <span>Login</span>
        </ButtonGray>
      </li>
      <OnlyPc className="only-pc">
        <ButtonGray to="#" className="button gray">
          <ButtonImg src={imgRegister} alt="Register" />
          <span>Register</span>
        </ButtonGray>
      </OnlyPc>
    </>
  );
};

export default Logout;
