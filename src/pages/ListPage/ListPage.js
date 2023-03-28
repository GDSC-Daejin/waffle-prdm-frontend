import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

function ListPage() {
  const [isList, setList] = useState([]);

  useEffect(() => {
    axios
      .get('https://pr-dm-ca227.du.r.appspot.com/api/v1/post/list')
      .then((res) => {
        setList(res.data.content);
        console.log(res.data.content);
      });
  }, []);

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
          {/*<SortBtnWrap>*/}
          {/*  <NewSort>최신순</NewSort>*/}
          {/*  <HotSort>인기순</HotSort>*/}
          {/*</SortBtnWrap>*/}
        </TopBox>
        <ListWrapper>
          {isList.map((listItem, i) => {
            return (
              <Link to={`/detail/${i + 1}`}>
                <List>
                  <ListImg />
                  <ListData>
                    <ListTitle>{listItem.title}</ListTitle>
                    <ListContent>{listItem.text}</ListContent>
                  </ListData>
                  <ListInfo>
                    <ListDate>{listItem.registerDate}</ListDate>
                    {/*<ListChat>*/}
                    {/*  <ChatImg />*/}
                    {/*  <ChatCount>5</ChatCount>*/}
                    {/*</ListChat>*/}
                  </ListInfo>
                </List>
              </Link>
            );
          })}
        </ListWrapper>
        <Footer>푸터</Footer>
      </PageWrapper>
    </div>
  );
}

export default ListPage;
