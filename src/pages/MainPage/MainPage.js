import React from 'react';
import {
  BackTitle,
  Footer,
  Header,
  Line,
  MenuImg,
  MenuSubTilte,
  MenuTitle,
  MenuWrap,
  PageWrapper,
  TipBanner,
  TipBannerWrap,
} from '../../PageStyles';
import menu from '../../assets/222.svg';

function MainPage() {
  return (
    <div>
      {/*<BackTitle>*/}
      {/*  Find a Delicious Slice*/}
      {/*  <br />*/}
      {/*  at the Bake Shop*/}
      {/*</BackTitle>*/}
      <PageWrapper>
        <Header>헤더</Header>
        <TipBannerWrap>
          <TipBanner>팁 배너임</TipBanner>
        </TipBannerWrap>
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
