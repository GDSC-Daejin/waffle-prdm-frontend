import { Chart } from "react-google-charts";
import React, {useEffect, useState} from "react";
import {ChartSection} from "../../PageStyles";
import axios from "axios";
import ChartHeader from "./ChartHeader";

function ChartBody(){
    const dataArray = [['구', '쓰레기 양']];
    let chartMapData = [];
    const CityName3 = `서울특별시`;

    const [MapData, setMapData] = useState([]);

    useEffect(() => {
        axios.get(`https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste?cityDo=${CityName3}&end=2021-07-05&start=2021-07-01`)
            .then((response) => {
                chartMapData.push(response.data.map(item => [ item.cityGu, item.amount]));
                for (let i = 0; i <chartMapData[1].length; i++){
                    dataArray.push(chartMapData[1][i]);
                }
                console.log("dataTest:",dataArray);
            })
            .then(console.log("왜 안나오지: ",dataArray))
            .then(console.log("맵 데이터: ",chartMapData,))
            .catch(error => {
                console.error(error);
            })
    }, []);

    const options = {
        title:"음식물 쓰레기 차트",
    };
    
    return(
        <ChartSection>
            <Chart
                chartType="Bar"
                data={dataArray}
                options={options}
                width={"100%"}
                height={"100%"}
            />
        </ChartSection>
    );
}

export default ChartBody;