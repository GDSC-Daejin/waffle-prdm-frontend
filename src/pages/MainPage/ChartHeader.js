import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChartSubTitle, ChartTitle, ChartTitleWrap, ChartWrap } from "../../PageStyles";

function ChartHeader() {
    const whArray = [];
    const wh = () => {
        axios.get("https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste?cityDo=서울특별시&end=2021-07-02&start=2021-07-01")
            .then((response) => {
                console.log("1. wh로 불러온값: ",response.data);
                response.data.map((c) => whArray.push(c.amount));
            })
            .then(console.log("2. whArray값: ",whArray))
    };
    // City selectBox
    const [CityData, CitySetData] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null); // 선택된 도시를 저장하는 state

    useEffect(() => {
        axios.get("https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste/city")
            .then((response) => {
                CitySetData(response.data);
            });
    }, []);

    const handleCitySelect = (event) => {
        setSelectedCity(event.target.value);
    };

    // CityGu SelectBox
    const [CityGuData, CityGuSetData] = useState([]);
    const [selectedCityGu, setSelectedCityGu] = useState(null);
    const selectTest = `서울특별시`;

    useEffect((CityGuData) => {
        axios.get("https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste/city/서울특별시")
            .then((response) => {
                CityGuSetData(response.data);
            });
    }, [selectedCity]);
    const handleCityGuSelect = (event) => {
        setSelectedCityGu(event.target.value);
    };

    return (
        <ChartWrap>
            <ChartTitleWrap>
                <ChartTitle>음식물 차트</ChartTitle>
                <ChartSubTitle>지역을 선택해 주세요</ChartSubTitle>
                {/*첫번째 selectBox : 시 선택*/}
                <div>
                    <select onChange={handleCitySelect}>
                        <option value={null}>시를 선택하세요</option>
                        {CityData.map((city) => (
                            <option key={city}>{city}</option>
                        ))}
                    </select>
                    <p>{selectedCity}</p>
                </div>
                {/*두번째SelectBox*/}
                <div>
                    <select onChange={handleCityGuSelect}>
                        <option value={null}>도를 선택하세요</option>
                        {CityGuData.map((gu)=>(
                            <option key={gu}>{gu}</option>
                        ))}
                    </select>
                    <p>{selectedCityGu}</p>
                </div>
                <button onClick={wh}>차트 테스트용 버튼</button>
            </ChartTitleWrap>
            {/*{selectedCity && <ChartBody selectedCity={selectedCity} />}*/}
        </ChartWrap>
    );
}

export default ChartHeader;
