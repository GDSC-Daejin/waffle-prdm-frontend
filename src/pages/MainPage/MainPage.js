import React, {useEffect, useState} from 'react';
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
  TipBannerWrap,
  ChartSubTitle,
  HeaderIcon01,
  HeaderIcon02,
  HeaderIcon03,
  ChartTitleWrap,
  FullScreen,
} from '../../PageStyles';
import menu from '../../assets/222.svg';
import Back from '../../assets/HeaderIcon_Back.png';
import Home from '../../assets/HeaderIcon_Home.png';
import User from '../../assets/HeaderIcon_User.png';
import ChartPage from './ChartPage';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MainPage() {
  //날짜 입력 data
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  //foodwaste Data
  const [data, setData] = useState([]);

  //날짜 data 관리
  const handleDateChange1 = date => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = date => {
    setSelectedDate2(date);
  };

  const ApiFoodwaste = () => {
    axios.get('https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste/city')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
  }
  //테스트용
  const ApiFoodwaste2 = () => {
    fetch('https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste/locations')
        .then((response)=>console.log("response: ", response.json()))
        .catch(error => console.error(error));
  }
//
  const ApiLocations = () => {
    axios.get('https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste/city/서울특별시')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
  }

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
            <HeaderIcon02 src={Home} />
            <Link to="/login">
              <HeaderIcon03 src={User} />
            </Link>
          </Header>
          <TipBannerWrap>
            <TipBanner>
              Tip 배너 (랜덤)
              <br />
              ex) 식재료 껍질은 육수 등에 활용 가능하다는 사실!
            </TipBanner>
          </TipBannerWrap>
          <Line />
          <div>
            <DatePicker>
              selected={selectedDate1}
              onChange={handleDateChange1}
              dateFormat="yyyy/MM/dd"
              placeholderText="시작날짜"
            </DatePicker>
            {selectedDate1 && (
                <p>선택한 날짜는 {selectedDate1.toLocaleDateString()} 입니다.</p>
            )}
            <DatePicker>
              selected={selectedDate2}
              onChange={handleDateChange2}
              dateFormat="yyyy/MM/dd"
              placeholderText="종료날짜"
            </DatePicker>
          </div>
          <ChartWrap>
            <ChartTitleWrap>
              <ChartTitle>음식물 차트</ChartTitle>
              <ChartSubTitle>지역을 선택해 주세요</ChartSubTitle>
              <button onClick={ApiFoodwaste}>Foodwaste</button>
              <button onClick={ApiLocations}>Locations</button>
            </ChartTitleWrap>
            <ChartPage />
          </ChartWrap>
          <Line />
          <MenuWrap>
            <MenuTitle>
              봉사 모임 구하기
              <MenuSubTilte>같이 봉사활동해요~</MenuSubTilte>
            </MenuTitle>
            <Link to="list">
              <MenuImg src={menu} />
            </Link>
          </MenuWrap>
          <Line />
          <MenuWrap>
            <MenuTitle>
              그린 챌린지
              <MenuSubTilte>음식물 쓰레기 줄이기 챌린지</MenuSubTilte>
            </MenuTitle>
            <MenuImg src={menu} />
          </MenuWrap>
          <Line />
          <MenuWrap>
            <MenuTitle>
              꿀팁 / Q&A 게시판
              <MenuSubTilte>다양한 꿀팁을 공유해봅시다~!</MenuSubTilte>
            </MenuTitle>
            <Link to="/board">
              <MenuImg src={menu} />
            </Link>
          </MenuWrap>
          <Line />
          <Footer>푸터</Footer>
        </PageWrapper>
      </div>
  );
}

export default MainPage;
