import React from 'react';
import { Chart } from "react-google-charts";
import {
    BackTitle,
    Footer,
    Header,
    Line, LoginButton, LoginSubTitle, LoginTitle, LoginWrap,
    PageWrapper,
} from '../../PageStyles';
import loginButtonImg from '../../assets/googleLogin.png';

function LoginPage() {
    return(
        <div>
            <BackTitle>
                Find a Delicious Slice
                <br />
                at the Bake Shop
            </BackTitle>
            <PageWrapper>
                <Header>헤더</Header>
                <Line />
                <LoginWrap>
                    <LoginTitle>로그인/회원가입</LoginTitle>
                    <LoginSubTitle>로그인/회원가입 후 더 많은 경험을 즐기세요!</LoginSubTitle>
                    <LoginButton src={loginButtonImg} />
                    <Chart
                        chartType="ScatterChart"
                        data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                        width="100%"
                        height="400px"
                        legendToggle
                    />
                </LoginWrap>
                <Line />
                <Footer>푸터</Footer>
            </PageWrapper>
        </div>
    );
}

export default LoginPage;