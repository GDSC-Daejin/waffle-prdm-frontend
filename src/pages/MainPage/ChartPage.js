import React from "react";
import { Chart } from "react-google-charts";
import {ChartSection} from "../../PageStyles";

export const data = [
    ["Year", "성북구", "종로구", "동대문구"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
];
export const options = {
    title: "내 주변 음식물 쓰레기 배출량",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
};

function ChartPage(){
    return(
        <ChartSection>
            <Chart
                chartType="Bar"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </ChartSection>
    );
}

export default ChartPage;