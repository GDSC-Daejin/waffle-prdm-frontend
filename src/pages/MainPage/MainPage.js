import React from 'react';
import {
  BackTitle,
  ChartWrap,
  ChartTitle,
  Footer,
  Header,
  Line,
  MenuImg,
  MenuSubTilte,
  MenuTitle,
  MenuWrap,
  PageWrapper,
  TipBanner,
  TipBannerWrap, ChartSubTitle, HeaderIcon01, HeaderIcon02, HeaderIcon03,
} from '../../PageStyles';
import menu from '../../assets/222.svg';
import Back from '../../assets/HeaderIcon_Back.png';
import Home from '../../assets/HeaderIcon_Home.png';
import User from '../../assets/HeaderIcon_User.png';
import ChartPage from "./ChartPage";

function MainPage() {
  return (
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
        <TipBannerWrap>
          <TipBanner>팁 배너임</TipBanner>
        </TipBannerWrap>
        <Line />
        <ChartWrap>
          <ChartTitle>음식물 차트</ChartTitle>
          <ChartSubTitle>지역을 선택해 주세요</ChartSubTitle>
          <ChartPage />
        </ChartWrap>
        <Line />
        <MenuWrap>
          <MenuTitle>
            봉사 모임 구하기
            <MenuSubTilte>같이 봉사활동해요~</MenuSubTilte>
          </MenuTitle>
          <MenuImg src={menu} />
        </MenuWrap>
        <Line />
        <MenuWrap>
          <MenuTitle>
            봉사 모임 구하기
            <MenuSubTilte>같이 봉사활동해요~</MenuSubTilte>
          </MenuTitle>
          <MenuImg src={menu} />
        </MenuWrap>
        <Line />
        <MenuWrap>
          <MenuTitle>
            봉사 모임 구하기
            <MenuSubTilte>같이 봉사활동해요~</MenuSubTilte>
          </MenuTitle>
          <MenuImg src={menu} />
        </MenuWrap>
        <Line />

        <Footer>푸터</Footer>
      </PageWrapper>
    </div>
  );
}

export default MainPage;
