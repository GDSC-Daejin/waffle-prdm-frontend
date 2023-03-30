import React, { useEffect, useState } from "react";
import axios from "axios";
import {ChartSection, ChartSubTitle, ChartTitle, ChartTitleWrap, ChartWrap, SelectBoxWrap} from "../../PageStyles";
import {Chart} from "react-google-charts";

function ChartHeader() {
    // *** [selectBox 설정] ***
    let selectTest = ``;

    // 1) City selectBox
    const [CityData, CitySetData] = useState([]); //API에서 가져온 City값 저장하는 state
    const [selectedCity, setSelectedCity] = useState(null); // 선택된 도시를 저장하는 state

    useEffect(() => {
        axios.get("https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste/city")
            .then((response) => {
                CitySetData(response.data);
            });
    }, []);

    const handleCitySelect = (event) => {
        setSelectedCity(event.target.value);
        // 두번째 select
        axios.get(`https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste/city/${event.target.value}`)
            .then((response) => {
                CityGuSetData(response.data);
            });

    };

    // 2) CityGu SelectBox
    const [CityGuData, CityGuSetData] = useState([]);
    const [selectedCityGu, setSelectedCityGu] = useState(null);

    const handleCityGuSelect = (event) => {
        setSelectedCityGu(event.target.value);
    };

    return (
        <ChartWrap>
            <ChartTitleWrap>
                <ChartTitle>음식물 차트</ChartTitle>
                <ChartSubTitle>지역을 선택해 주세요</ChartSubTitle>
                {/*첫번째 selectBox : 시 선택*/}
                <SelectBoxWrap selectCity={selectedCity}>
                    <select onChange={handleCitySelect}>
                        <option value={null}>시를 선택하세요</option>
                        {CityData.map((city) => (
                            <option key={city}>{city}</option>
                        ))}
                    </select>
                    <p>{selectedCity}</p>
                </SelectBoxWrap >
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
            </ChartTitleWrap>
        </ChartWrap>
    );
}

export default ChartHeader;
