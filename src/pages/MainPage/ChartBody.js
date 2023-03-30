import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";
import {ChartSection} from "../../PageStyles";
import axios from "axios";

const whArray = [];
const wh = () => {
    axios.get("https://pr-dm-ca227.du.r.appspot.com/api/v1/foodwaste?cityDo=서울특별시&cityGu=도봉구&end=2021-07-15&start=2021-07-01")
        .then((response) => {
            const chartMapData = response.data.map(item => [item.amount, item.cityDo]);
        })
        .then(console.log("왜 안나오지: ",whArray))
        .catch(error => {
            console.error(error);
        })
};

function ChartBody(){
    return(
        <ChartSection>
            <Chart
                chartType="LineChart"
                data={0}
                //options={options}
                width={"100%"}
                height={"400px"}
            />
        </ChartSection>
    );
}

export default ChartBody;