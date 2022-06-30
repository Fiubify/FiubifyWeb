import {useEffect, useState} from "react";
import {getAllContentMetrics} from "../../utils/api/metricsApi";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryTheme} from "victory";
import {ContentLastWeek} from "./ContentLastWeek";

function getCurrentDate(separator='-'){

    let newDate = new Date()
    // let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    // let year = newDate.getFullYear();
    //
    //return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    return newDate.toUTCString();
}

export function ContentMetricsGraphs() {
    const [content, setContent] = useState([]);
    useEffect(() => {
        getAllContentMetrics().then((contents) => setContent(contents.data));
    }, []);

    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
    ];

    if (content.length > 0) {
        return (<div>
            <ContentLastWeek content={content}/>
            {/*<VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={20}
                height={200}
                width={300}
            >
                <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryBar
                    name={"Last Week ContentMetrics"}
                    data={data}
                    x="quarter"
                    y="earnings"
                    animate={{
                        duration: 2000,
                        onLoad: {duration: 1000}
                    }}
                />
            </VictoryChart>*/}
        </div>);
    } else {
        return "";
    }

}