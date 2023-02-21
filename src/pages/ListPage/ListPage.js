import React from 'react';
import {
  ChatCount,
  ChatImg,
  Footer,
  Header,
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

function ListPage() {
  return (
    <div>
      <PageWrapper>
        <Header>헤더</Header>
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
