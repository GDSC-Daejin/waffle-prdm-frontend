import React from 'react';
import {
  AddBtn,
  CategoryTitleBtn,
  ChartWrap,
  ChatCount,
  ChatImg,
  Comment,
  CommentAdd,
  CommentAddInput,
  CommentAddWrap,
  CommentContent,
  CommentDate,
  CommentImg,
  CommentInfo,
  CommentInfoWrap,
  CommentList,
  CommentUserImg,
  CommentUserName,
  CommentWrap,
  Content,
  DetailLine,
  Header,
  HeaderIcon01,
  HeaderIcon02,
  HeaderIcon03,
  Line,
  PageWrapper,
  TxtWrap,
  UploadDate,
  UserImg,
  UserInfoWrapper,
  UserName,
} from '../../PageStyles';
import He from 'styled-components/dist/styled-components.browser.esm';
import { Link } from 'react-router-dom';
import Back from '../../assets/HeaderIcon_Back.png';
import Home from '../../assets/HeaderIcon_Home.png';
import User from '../../assets/HeaderIcon_User.png';
import * as PropTypes from 'prop-types';

function CommentCreatWrap(props) {
  return null;
}

CommentCreatWrap.propTypes = { children: PropTypes.node };

function DetailPage() {
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
        <CategoryTitleBtn>봉사 모임 구하기</CategoryTitleBtn>
        <UserInfoWrapper>
          <UserImg />
          <TxtWrap>
            <UserName>qweasd111</UserName>
            <UserName>|</UserName>
            <UploadDate>2022.02.01</UploadDate>
          </TxtWrap>
        </UserInfoWrapper>
        <DetailLine />
        <Content>
          안녕하세요 봉사 모임 구합니다. 안녕하세요 봉사 모임
          구합니다.안녕하세요 봉사 모임 구합니다.안녕하세요 봉사 모임 구합니다.
        </Content>
        <DetailLine />
        <CommentInfoWrap>
          <ChatImg />
          <ChatCount>4</ChatCount>
        </CommentInfoWrap>
        <CommentList>
          <Comment>
            <CommentInfo>
              <CommentUserImg />
              <CommentUserName>asdzxc22</CommentUserName>
              <CommentUserName>|</CommentUserName>
              <CommentDate>2022.02.01</CommentDate>
            </CommentInfo>
            <CommentContent>저요 저요</CommentContent>
          </Comment>
          <DetailLine />
          <Comment>
            <CommentInfo>
              <CommentUserImg />
              <CommentUserName>asdzxc22</CommentUserName>
              <CommentUserName>|</CommentUserName>
              <CommentDate>2022.02.01</CommentDate>
            </CommentInfo>
            <CommentContent>저요 저요</CommentContent>
          </Comment>
          <DetailLine />
          <Comment>
            <CommentInfo>
              <CommentUserImg />
              <CommentUserName>asdzxc22</CommentUserName>
              <CommentUserName>|</CommentUserName>
              <CommentDate>2022.02.01</CommentDate>
            </CommentInfo>
            <CommentContent>저요 저요</CommentContent>
          </Comment>
          <DetailLine />
          <Comment>
            <CommentInfo>
              <CommentUserImg />
              <CommentUserName>asdzxc22</CommentUserName>
              <CommentUserName>|</CommentUserName>
              <CommentDate>2022.02.01</CommentDate>
            </CommentInfo>
            <CommentContent>저요 저요</CommentContent>
          </Comment>
          <DetailLine />
          <CommentAddWrap>
            <CommentAddInput />
            <AddBtn>등록</AddBtn>
          </CommentAddWrap>
        </CommentList>
      </PageWrapper>
    </div>
  );
}

export default DetailPage;
