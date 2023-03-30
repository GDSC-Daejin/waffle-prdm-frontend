import { Chart } from "react-google-charts";
import React, {useEffect, useState} from "react";
import {ChartSection} from "../../PageStyles";
import axios from "axios";

function ChartBody2(){
    const dataArray = [['시', '값']];
    let chartMapData = [
        ['시', '값']
    ];
    let dataTest=[];

    const [MapData, setMapData] = useState([]);
    useEffect(() => {
        axios.get("https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste?cityDo=서울특별시&end=2021-07-15&start=2021-07-01")
            .then((response) => {
                chartMapData.push(response.data.map(item => [ item.cityDo, item.amount]));
                for (let i = 0; i <chartMapData[1].length; i++){
                    dataArray.push(chartMapData[1][i]);
                }
                // dataArray.push(chartMapData[1][0]);
                console.log("dataTest:",dataArray);
            })
            .then(console.log("왜 안나오지: ",dataArray))
            .then(console.log("맵 데이터: ",chartMapData,))
            .catch(error => {
                console.error(error);
            })
    }, [chartMapData]);
    function MapDataPush() {

    }
    const options = {
        title:"왜 안되는걸까",
        hAxis: { title: "Life Expectancy" },
        vAxis: { title: "Fertility Rate" },
        bubble: { textStyle: { fontSize: 11 } },
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
            {console.log("테스트 배열:" ,{dataTest})}
        </ChartSection>
    );
}

export default ChartBody2;