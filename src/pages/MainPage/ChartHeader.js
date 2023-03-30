import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChartSubTitle, ChartTitle, ChartTitleWrap, ChartWrap } from "../../PageStyles";
import ChartBody from "./ChartBody";

function ChartHeader() {
    const whArray = [];
    const wh = () => {
        axios.get("https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste?cityDo=서울특별시&cityGu=도봉구&end=2021-07-15&start=2021-07-01")
            .then((response) => {
                console.log(response.data);
                response.data.map((c) => whArray.push(c.amount));
            })
            .then(console.log("왜 안나오지: ",whArray))
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

    useEffect((CityGuData) => {
        axios.get("https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste/city/${CityGuData}")
            .then((response) => {
                CityGuSetData(response.data);
            });
    }, []);
    const handleCityGuSelect = (event) => {
        setSelectedCityGu(event.target.value);
    };

    return (
        <ChartWrap>
            <ChartTitleWrap>
                <ChartTitle>음식물 차트</ChartTitle>
                <ChartSubTitle>지역을 선택해 주세요</ChartSubTitle>
                {/*첫번째 selectBox*/}
                <div>
                    <select onChange={handleCitySelect}>
                        <option value={null}>시를 선택하세요</option>
                        {CityData.map((city) => (
                            <option key={city}>{city}</option>
                        ))}
                    </select>
                    <p>{selectedCity}</p>
                    {/*<button onClick={}>test임다</button>*/}
                </div>
                {/*두번째SelectBox*/}
                <div>
                    <select>
                        <option>22선택하세요</option>
                        {CityGuData.map((gu)=>(
                            <option key={gu}>{gu}</option>
                        ))}
                    </select>
                </div>
                <button onClick={wh}>차트 테스트용 버튼</button>
                <button onClick={console.log(whArray)}>배열 테스트</button>
            </ChartTitleWrap>
            {/*{selectedCity && <ChartBody selectedCity={selectedCity} />}*/}
        </ChartWrap>
    );
}

export default ChartHeader;
