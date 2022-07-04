import {useEffect, useState} from "react";
import {filterMetricsByAction, getAllContentMetrics} from "../../../utils/api/metricsApi";
import {ContentLastWeek} from "./ContentLastWeek";
import {SongsListenedByDayChar} from "./SongsListenedByDayChar"
import {creationContentAction, listenedContentAction} from "../../../utils/constantes";

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


    if (content.length > 0) {
        return (<div>
            <ContentLastWeek content={content}/>
            <h2>Listened songs by action</h2>
            <SongsListenedByDayChar content={filterMetricsByAction(content, listenedContentAction)}/>
            <h2>Created songs by action</h2>
            <SongsListenedByDayChar content={filterMetricsByAction(content, creationContentAction)}/>
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