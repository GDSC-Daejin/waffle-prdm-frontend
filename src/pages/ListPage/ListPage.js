import React, { useEffect, useState } from 'react';
import {
  BannerImg,
  ChatCount,
  ChatImg,
  EditIcon,
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
import EditImg from '../../assets/EditIcon.png';
import { Link } from 'react-router-dom';
import User from '../../assets/HeaderIcon_User.png';
import axios from 'axios';
import Banner from "../../assets/Banner.png";

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
          <HeaderIcon01 src={Back} />
          <Link to={"/"}>
            <HeaderIcon02 src={Home} />
          </Link>
          <Link to="/login">
            <HeaderIcon03 src={User} />
          </Link>
        </Header>
        <BannerImg src={Banner}/>
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
          <Link to="/board">
            <EditIcon src={EditImg}></EditIcon>
          </Link>
        </ListWrapper>
        <Footer>푸터</Footer>
      </PageWrapper>
    </div>
  );
}

export default ListPage;
