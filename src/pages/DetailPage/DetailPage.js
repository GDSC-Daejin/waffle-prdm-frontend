import React, { useEffect, useState } from 'react';
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
  List,
  PageWrapper,
  Title,
  TxtWrap,
  UploadDate,
  UserImg,
  UserInfoWrapper,
  UserName,
} from '../../PageStyles';
import He from 'styled-components/dist/styled-components.browser.esm';
import { Link, useParams } from 'react-router-dom';
import Back from '../../assets/HeaderIcon_Back.png';
import Home from '../../assets/HeaderIcon_Home.png';
import User from '../../assets/HeaderIcon_User.png';
import * as PropTypes from 'prop-types';
import axios from 'axios';

function CommentCreatWrap(props) {
  return null;
}

CommentCreatWrap.propTypes = { children: PropTypes.node };

function DetailPage() {
  const [isPost, setPost] = useState();
  const [isComment, setComment] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pr-dm-ca227.du.r.appspot.com/api/v1/post/${id}`)
      .then((res) => {
        setPost(res.data);
        // console.log(isPost);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://pr-dm-ca227.du.r.appspot.com/api/v1/post/${id}/comment/list`)
      .then((res) => {
        setComment(res.data.content);
        // console.log(res.data.content);
      });
  }, []);

  const addOnClick = () => {
    axios
      .post(`https://pr-dm-ca227.du.r.appspot.com/api/v1/post/${id}`, 'text')
      .then(() => {
        console.log('댓글 등록');
      });
  };

  const [isText, setText] = useState('');
  const getText = (e) => {
    setText(e.target.value);
    console.log('댓글 : ' + isText);
  };

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
        <CategoryTitleBtn>봉사 모임 구하기</CategoryTitleBtn>
        <UserInfoWrapper>
          <UserImg />
          <TxtWrap>
            <UserName>qweasd111</UserName>
            <UserName>|</UserName>
            <UploadDate>{isPost?.registerDate || 'loading'}</UploadDate>
          </TxtWrap>
        </UserInfoWrapper>
        <Title>{isPost?.title || 'loading'}</Title>
        <DetailLine />
        <Content>{isPost?.text || 'loading'}</Content>
        <DetailLine />
        {/*<CommentInfoWrap>*/}
        {/*  <ChatImg />*/}
        {/*  <ChatCount>4</ChatCount>*/}
        {/*</CommentInfoWrap>*/}
        <CommentList>
          {isComment &&
            isComment.map((v, i) => {
              return (
                <>
                  <Comment>
                    <CommentInfo>
                      <CommentUserImg />
                      <CommentUserName>{isComment[i].postId}</CommentUserName>
                      <CommentUserName>|</CommentUserName>
                      <CommentDate>{isComment[i].registerDate}</CommentDate>
                    </CommentInfo>
                    <CommentContent>{isComment[i].text}</CommentContent>
                  </Comment>
                  <DetailLine />
                </>
              );
            })}
          <CommentAddWrap>
            <CommentAddInput onChange={getText} />
            <AddBtn onClick={addOnClick}>등록</AddBtn>
            {/*<button onClick={commentGet}>dasd</button>*/}
          </CommentAddWrap>
        </CommentList>
      </PageWrapper>
    </div>
  );
}

export default DetailPage;
