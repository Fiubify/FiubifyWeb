import {useEffect, useState} from "react";
import {filterMetricsByAction, getAllContentMetrics} from "../../../utils/api/metricsApi";
import {SongsListenedByDayChar} from "./SongsListenedByDayChar"
import {creationContentAction, listenedContentAction} from "../../../utils/constantes";
import {SongsTierPieChart} from "./SongsTierPieChart";
import {TopSongsChart} from "./TopSongsChart";
import {TopAlbumsChart} from "./TopAlbumsChart";
import {TopGenresChart} from "./TopGenresChart";

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
            <TopGenresChart/>
        </div>);
    } else {
        return "";
    }

}