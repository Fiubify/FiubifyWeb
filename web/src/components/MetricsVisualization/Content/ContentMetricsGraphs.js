import {useEffect, useState} from "react";
import {filterMetricsByAction, getAllContentMetrics} from "../../../utils/api/metricsApi";
import {SongsByDayBarChar} from "./SongsByDayBarChar"
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
            <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
            }}>
                <div style={{width: "45%"}}>
                    <h1 style={{color: "#006e95"}}>Last week listened songs by tier</h1>
                    <SongsByDayBarChar content={filterMetricsByAction(content, listenedContentAction)}/>
                </div>
                <div style={{width: "45%"}}>
                    <h1 style={{color: "#006e95"}}>Last week uploaded songs by tier</h1>
                    <SongsByDayBarChar content={filterMetricsByAction(content, creationContentAction)}/>
                </div>
            </div>
            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: "2%",
                marginBottom: "-3%"
            }}>
                <h1 style={{width: "100%", color: "#006e95"}}>Songs Proportion by Plan</h1>
                <SongsTierPieChart/>
            </div>
            <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
            }}>
                <div style={{width: "33%",display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start"}}>
                    <h1 style={{color: "#006e95"}}>Top Songs listened</h1>
                    <TopSongsChart/>
                </div>
                <div style={{width: "33%",display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start"}}>
                    <h1 style={{color: "#006e95"}}>Top Albums listened</h1>
                    <TopAlbumsChart/>
                </div>
                <div style={{width: "33%",display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start"}}>
                    <h1 style={{color: "#006e95"}}>Top Genres listened</h1>
                    <TopGenresChart/>
                </div>
            </div>
        </div>);
    } else {
        return "";
    }

}