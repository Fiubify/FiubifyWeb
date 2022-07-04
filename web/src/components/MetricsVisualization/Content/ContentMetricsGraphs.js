import {useEffect, useState} from "react";
import {filterMetricsByAction, getAllContentMetrics} from "../../../utils/api/metricsApi";
import {SongsListenedByDayChar} from "./SongsListenedByDayChar"
import {creationContentAction, listenedContentAction} from "../../../utils/constantes";
import {SongsTierPieChart} from "./SongsTierPieChart";
import {TopSongsChart} from "./TopSongsChart";
import {TopAlbumsChart} from "./TopAlbumsChart";

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
            <h2>Last week listened songs by tier</h2>
            <SongsListenedByDayChar content={filterMetricsByAction(content, listenedContentAction)}/>
            <h2>Last week uploaded songs by tier</h2>
            <SongsListenedByDayChar content={filterMetricsByAction(content, creationContentAction)}/>
            <h2>Songs Proportion by Plan</h2>
            <SongsTierPieChart/>
            <h2>Top Songs listened</h2>
            <TopSongsChart/>
            <h2>Top Albums listened</h2>
            <TopAlbumsChart/>
            <h2>Top Genres listened</h2>
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