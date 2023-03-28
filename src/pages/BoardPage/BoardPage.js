import React, { useState } from 'react';
import {
  BackTitle,
  BoardButtonWrap,
  BoardContentBoxWrap,
  BoardContentInput,
  BoardContentInputWrap,
  BoardImageWrap,
  BoardSubmitButton,
  BoardSubTitle,
  BoardTitle,
  BoardTitleBoxWrap,
  BoardTitleInput,
  BoardWrap,
  Footer,
  Header,
  HeaderIcon01,
  HeaderIcon02,
  HeaderIcon03,
  ImageAddIcon,
  Line,
  PageWrapper,
  TipBanner,
  TipBannerWrap,
} from '../../PageStyles';
import Back from '../../assets/HeaderIcon_Back.png';
import Home from '../../assets/HeaderIcon_Home.png';
import { Link } from 'react-router-dom';
import User from '../../assets/HeaderIcon_User.png';
import ImageAdd from '../../assets/BoardPageIcon.png';
import axios from 'axios';

function BoardPage() {
  const onClickPost = () => {
    axios
      .post('https://pr-dm-ca227.du.r.appspot.com/api/v1/post', {
        categoryId: 0,
        text: isText,
        title: isTitle,
      })
      .then((r) => {
        console.log('Post 성공');
      });
  };

  const [isTitle, setTitle] = useState('');
  const getTitle = (e) => {
    setTitle(e.target.value);
    console.log('제목 : ' + isTitle);
  };

  const [isText, setText] = useState('');
  const getText = (e) => {
    setText(e.target.value);
    console.log('내용 : ' + isText);
  };

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
          <Link to="/">
            <HeaderIcon02 src={Home} />
          </Link>
          <Link to="/login">
            <HeaderIcon03 src={User} />
          </Link>
        </Header>
        <BoardWrap>
          <BoardTitle>봉사 모임 구하기</BoardTitle>
          <BoardTitleBoxWrap>
            <BoardSubTitle>제목</BoardSubTitle>
            <BoardTitleInput
              placeholder="제목을 입력해주세요"
              onChange={getTitle}
            />
          </BoardTitleBoxWrap>
          <BoardContentBoxWrap>
            <BoardSubTitle>내용</BoardSubTitle>
            <BoardContentInputWrap>
              <BoardContentInput
                placeholder="내용을 입력해주세요"
                onChange={getText}
              />
            </BoardContentInputWrap>
          </BoardContentBoxWrap>
          <BoardImageWrap>
            <BoardSubTitle>이미지 첨부</BoardSubTitle>
            <ImageAddIcon src={ImageAdd} />
          </BoardImageWrap>
          <BoardButtonWrap>
            <BoardSubmitButton onClick={onClickPost}>등록</BoardSubmitButton>
          </BoardButtonWrap>
        </BoardWrap>
        <Footer>푸터</Footer>
      </PageWrapper>
    </div>
  );
}

export default BoardPage;
