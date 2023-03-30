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
import { auth } from './Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

function LoginPage() {
  const [userData, setUserData] = useState(null);

  //로그인 관리 함수
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
        .then((data) => {
          setUserData(data.user);
          console.log(data)
        })
        .catch((err) => {
          console.log(err);
        });
  }
  //로그인 이동 onClick함수
  function loginMove(){
    window.location.href = "https://pr-dm-ca227.du.r.appspot.com/oauth2/authorization/google";
  }
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
          <HeaderIcon01 src={Back} />
          <Link to={"/"}>
            <HeaderIcon02 src={Home} />
          </Link>
          <Link to="/login">
            <HeaderIcon03 src={User} />
          </Link>
        </Header>
        <Line />
        <LoginWrap>
          <LoginTitle>로그인/회원가입</LoginTitle>
          <LoginSubTitle>
            로그인/회원가입 후 더 많은 경험을 즐기세요!
          </LoginSubTitle>
          <div>
            <button onClick={loginMove}>
              <LoginButton src={loginButtonImg}/>
            </button>
            {userData ? userData.displayName : null}
          </div>

        </LoginWrap>
      </PageWrapper>
    </div>
  );
}

export default LoginPage;
