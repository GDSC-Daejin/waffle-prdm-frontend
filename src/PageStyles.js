import styled from 'styled-components';

export const BackTitle = styled.div`
  position: fixed;
  margin: 200px 0 10px 100px;
  font-size: 40px;
  color: #f4e7c5;
  font-weight: bold;
`;

export const PageWrapper = styled.div`
  background-color: #fff;
  position: relative;
  width: 600px;
  height: fit-content;
  float: right;
  margin-right: 200px;
`;

export const Header = styled.div`
  height: 70px;
  background-color: #d9d9d9;
  position: relative;
`;

export const HeaderIcon01 = styled.img`
  position: absolute;
  left: 20px;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  opacity: 70%;
`;
export const HeaderIcon02 = styled.img`
  position: absolute;
  left: 48%;
  margin-top: 20px;
  width: 35px;
  height: 35px;
  opacity: 70%;
`;

export const HeaderIcon03 = styled.img`
  position: absolute;
  right: 20px;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  opacity: 70%;
`;

export const TipBannerWrap = styled.div`
  height: 100px;
  background-color: darkgray;
  text-align: center;
`;

export const TipBanner = styled.div`
  color: #fff;
  font-size: 16px;
  padding: 30px 0 0 0;
`;

export const Line = styled.div`
  border: #d9d9d9 4px solid;
`;

export const ChartWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
`;

export const ChartTitleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding: 10px 10px 20px;
  width: 100%;
  background-color: #d9d9d9;
`;

export const ChartTitle = styled.div`
  width: 100%;
  top: 50px;
  margin: 10px 10px 5px 20px;
  font-size: 25px;
  font-weight: bold;
`;

export const ChartSubTitle = styled.div`
  width: 100%;
  margin: 2px 2px 2px 20px;
  font-size: 15px;
`;

export const ChartSection = styled.div`
  display: flex;
  margin: 20px;
`;
export const LoginWrap = styled.div`
  position: relative;
  flex-wrap: wrap;
  height: 90vh;
`;

export const LoginTitle = styled.div`
  margin: 60px 10px 10px 40px;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
`;
export const LoginSubTitle = styled.div`
  margin: 10px 10px 10px 45px;
  width: 100%;
  font-size: 16px;
  font-weight: normal;
`;
export const LoginButton = styled.img`
  position: absolute;
  top: 600px;
  //bottom: 100px;
  margin-left: 20%;
  width: 350px;
  filter: drop-shadow(1px 1px 1px #282c34);
`;
export const MenuWrap = styled.div`
  margin: 10px 0 15px 0;
`;

export const MenuTitle = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  margin: 20px 0 10px 30px;
  float: left;
  link: none;
`;

export const MenuSubTilte = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin: 10px 0 10px 10px;
`;

export const MenuImg = styled.img`
  display: flex;
  margin: 10px auto 0 auto;
  background-color: #96a38d;
  height: 220px;
  width: 96%;
  border-radius: 15px;
`;

export const Footer = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  height: 70px;
  background-color: #d9d9d9;
`;

//
// ListPage 스타일
//
export const ListBannerWrap = styled.div`
  height: 150px;
  background-color: darkgray;
  text-align: center;
`;

export const ListBanner = styled.div`
  color: #fff;
  font-size: 16px;
  padding: 30px 0 0 0;
`;

export const TopBox = styled.div`
  height: 70px;
  background-color: #d9d9d9;
  display: flex;
`;

export const MenuNameBox = styled.div`
  width: 90px;
  height: 20px;
  border-radius: 5px;
  background-color: wheat;
  font-size: 14px;
  text-align: center;
  padding: 7px;
  margin: 20px 0 0 29px;
`;

export const SortBtnWrap = styled.div`
  display: flex;
  gap: 10px;
  font-size: 15px;
  font-weight: bold;
  margin: 30px 0 0 340px;
`;

export const NewSort = styled.div`
  cursor: pointer;
`;

export const HotSort = styled.div`
  cursor: pointer;
`;

export const ListWrapper = styled.div``;

export const List = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  border-bottom: #d9d9d9 1px solid;
`;

export const ListImg = styled.img`
  width: 110px;
  height: 110px;
  margin: auto 30px auto 30px;
`;

export const ListData = styled.div`
  margin: 40px 0 0 0;
  width: 300px;
  height: 150px;
`;

export const ListTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ListContent = styled.div`
  font-size: 14px;
`;

export const ListInfo = styled.div`
  display: block;
`;

export const ListDate = styled.div`
  font-size: 14px;
  color: gray;
  margin: 40px 0 0 35px;
`;

export const ListChat = styled.div`
  display: flex;
  gap: 7px;
  height: 50px;
  width: 50px;
  margin: 70px 0 0 50px;
`;

export const ChatImg = styled.img`
  width: 15px;
  height: 15px;
`;

export const ChatCount = styled.div`
  font-size: 13px;
  color: gray;
  margin-top: -2px;
`;

// DetailPage 스타일

export const CategoryTitleBtn = styled.button`
  width: 144px;
  height: 35px;
  background: #d9d9d9;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 40px 0 30px 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  margin: 0 0 5px 30px;
`;

export const UserImg = styled.img`
  margin: 30px 10px 20px 30px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: none;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TxtWrap = styled.div`
  display: flex;
`;

export const UserName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.58);
  margin: auto 5px auto 10px;
`;

export const UploadDate = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.58);
  margin: auto 10px auto 10px;
`;

export const DetailLine = styled.div`
  width: 506px;
  height: 0px;
  border: 1px solid #d9d9d9;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin: 20px auto;
  padding: 40px 70px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.58);
`;

export const CommentInfoWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 85%;
  margin-top: 15px;
  margin-bottom: 50px;
`;

export const CommentList = styled.div`
  height: max-content;
  margin-bottom: 50px;
`;

export const Comment = styled.div`
  margin: 10px 0 10px 20px;
`;

export const CommentInfo = styled.div`
  display: flex;
  margin: 25px 0 5px 0;
`;

export const CommentUserImg = styled.img`
  width: 40px;
  height: 40px;
  margin: auto 10px auto 30px;
  border-radius: 100%;
  border: none;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CommentUserName = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.58);
  margin: auto 0 auto 10px;
`;

export const CommentDate = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.58);
  margin: auto 0 auto 10px;
`;

export const CommentContent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.58);
  margin: 6px 0 25px 90px;
`;

export const CommentAddWrap = styled.div``;

export const CommentAddInput = styled.input`
  width: 506px;
  height: 58px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const AddBtn = styled.button`
  width: 51px;
  height: 29px;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.58);
`;
