import React from 'react';
import {
  ChatCount,
  ChatImg,
  Footer,
  Header,
  HeaderIcon01,
  HeaderIcon02,
  HeaderIcon03,
  HotSort,
  Line,
  List,
  ListBanner,
  ListBannerWrap,
  ListChat,
  ListContent,
  ListData,
  ListDate,
  ListImg,
  ListInfo,
  ListTitle,
  ListWrapper,
  MenuNameBox,
  NewSort,
  PageWrapper,
  SortBtnWrap,
  TopBox,
} from '../../PageStyles';
import Back from '../../assets/HeaderIcon_Back.png';
import Home from '../../assets/HeaderIcon_Home.png';
import { Link } from 'react-router-dom';
import User from '../../assets/HeaderIcon_User.png';

function ListPage() {
  return (
    <div>
      <PageWrapper>
        <Header>
          <Link to="/">
            <HeaderIcon01 src={Back} />
          </Link>
          <HeaderIcon02 src={Home} />
          <Link to="/login">
            <HeaderIcon03 src={User} />
          </Link>
        </Header>
        <ListBannerWrap>
          <ListBanner>리스트 배너</ListBanner>
        </ListBannerWrap>
        <TopBox>
          <MenuNameBox>챌린지 인증</MenuNameBox>
          <SortBtnWrap>
            <NewSort>최신순</NewSort>
            <HotSort>인기순</HotSort>
          </SortBtnWrap>
        </TopBox>
        <ListWrapper>
          <Link to="/detail">
            <List>
              <ListImg />
              <ListData>
                <ListTitle>당근나눔</ListTitle>
                <ListContent>쓰레기통 무료나눔합니다. </ListContent>
              </ListData>
              <ListInfo>
                <ListDate>23.02.01</ListDate>
                <ListChat>
                  <ChatImg />
                  <ChatCount>5</ChatCount>
                </ListChat>
              </ListInfo>
            </List>
          </Link>
          <List>
            <ListImg />
            <ListData>
              <ListTitle>당근나눔</ListTitle>
              <ListContent>쓰레기통 무료나눔합니다. </ListContent>
            </ListData>
            <ListInfo>
              <ListDate>23.02.01</ListDate>
              <ListChat>
                <ChatImg />
                <ChatCount>5</ChatCount>
              </ListChat>
            </ListInfo>
          </List>
          <List>
            <ListImg />
            <ListData>
              <ListTitle>당근나눔</ListTitle>
              <ListContent>쓰레기통 무료나눔합니다. </ListContent>
            </ListData>
            <ListInfo>
              <ListDate>23.02.01</ListDate>
              <ListChat>
                <ChatImg />
                <ChatCount>5</ChatCount>
              </ListChat>
            </ListInfo>
          </List>
          <List>
            <ListImg />
            <ListData>
              <ListTitle>당근나눔</ListTitle>
              <ListContent>쓰레기통 무료나눔합니다. </ListContent>
            </ListData>
            <ListInfo>
              <ListDate>23.02.01</ListDate>
              <ListChat>
                <ChatImg />
                <ChatCount>5</ChatCount>
              </ListChat>
            </ListInfo>
          </List>
        </ListWrapper>
        <Footer>푸터</Footer>
      </PageWrapper>
    </div>
  );
}

export default ListPage;
