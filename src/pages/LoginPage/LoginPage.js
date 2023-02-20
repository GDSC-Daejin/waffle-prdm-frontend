import React from 'react';
import { Chart } from "react-google-charts";
import {
    BackTitle,
    Footer,
    Header, HeaderIcon01, HeaderIcon02, HeaderIcon03,
    Line, LoginButton, LoginSubTitle, LoginTitle, LoginWrap,
    PageWrapper,
} from '../../PageStyles';
import loginButtonImg from '../../assets/googleLogin.png';
import Back from "../../assets/HeaderIcon_Back.png";
import Home from "../../assets/HeaderIcon_Home.png";
import User from "../../assets/HeaderIcon_User.png";

function LoginPage() {
    return(
        <div>
            <BackTitle>
                Find a Delicious Slice
                <br />
                at the Bake Shop
            </BackTitle>
            <PageWrapper>
                <Header>
                    <HeaderIcon01 src={Back}/>
                    <HeaderIcon02 src={Home}/>
                    <HeaderIcon03 src={User}/>
                </Header>
                <Line />
                <LoginWrap>
                    <LoginTitle>로그인/회원가입</LoginTitle>
                    <LoginSubTitle>로그인/회원가입 후 더 많은 경험을 즐기세요!</LoginSubTitle>
                    <LoginButton src={loginButtonImg} />
                </LoginWrap>
                <Line />
                <Footer>푸터</Footer>
            </PageWrapper>
        </div>
    );
}

export default LoginPage;