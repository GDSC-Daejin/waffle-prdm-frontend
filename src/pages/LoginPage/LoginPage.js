import React from 'react';
import {
  BackTitle,
  Header,
  HeaderIcon01,
  HeaderIcon02,
  HeaderIcon03,
  Line,
  LoginButton,
  LoginSubTitle,
  LoginTitle,
  LoginWrap,
  PageWrapper,
} from '../../PageStyles';
import loginButtonImg from '../../assets/googleLogin.png';
import Back from '../../assets/HeaderIcon_Back.png';
import Home from '../../assets/HeaderIcon_Home.png';
import User from '../../assets/HeaderIcon_User.png';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <BackTitle>
        Find a Delicious Slice
        <br />
        at the Bake Shop
        <br />
        Find a Delicious Slice
        <br />
        at the Bake Shop
        <br />
      </BackTitle>
      <PageWrapper>
        <Header>
          <Link to="/">
            <HeaderIcon01 src={Back} />
            <HeaderIcon02 src={Home} />
          </Link>
          <HeaderIcon03 src={User} />
        </Header>
        <Line />
        <LoginWrap>
          <LoginTitle>로그인/회원가입</LoginTitle>
          <LoginSubTitle>
            로그인/회원가입 후 더 많은 경험을 즐기세요!
          </LoginSubTitle>
          <LoginButton src={loginButtonImg} />
        </LoginWrap>
      </PageWrapper>
    </div>
  );
}

export default LoginPage;
