import { Chart } from "react-google-charts";
import React, {useEffect, useState} from "react";
import {ChartSection} from "../../PageStyles";
import axios from "axios";

const data = [
    {name: '12', amount: '122'},
    {name: '12', amount: '122'},
    {name: '12', amount: '122'}
]

function ChartBody(){
    const dataArray = [];
    let chartMapData = [];

    useEffect(() => {
        axios.get("https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste?cityDo=서울특별시&end=2021-07-01&start=2021-07-01")
            .then((response) => {
                chartMapData.push(response.data.map(item => [ item.cityDo, item.amount]));
            })
            .then(console.log("왜 안나오지: ",dataArray))
            .then(console.log("맵 데이터: ",chartMapData,))
            .catch(error => {
                console.error(error);
            })
    }, []);
    const options = {
        title:
            "Fertility rate vs life expectancy in selected countries (2010)." +
            " X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region",
        hAxis: { title: "Life Expectancy" },
        vAxis: { title: "Fertility Rate" },
        bubble: { textStyle: { fontSize: 11 } },
    };

    let data = [
        chartMapData
    ]

    return(
        <ChartSection>
            <Chart
                chartType="BarChart"
                data={chartMapData}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </ChartSection>
    );
}

export default ChartBody;