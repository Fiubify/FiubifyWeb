import {useEffect, useState} from "react";
import {getTopListenedFor} from "../../../utils/api/metricsApi";
import {topGenresUrl} from "../../../utils/constantes";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryTheme} from "victory";

export function TopGenresChart() {
    const [genres, setGenres] = useState([]);

    async function fetchContent() {
        const apiResponse = await getTopListenedFor(topGenresUrl);
        setGenres(apiResponse.data);
    }

    useEffect(() => {
        fetchContent().then();
    }, []);

    if (genres.length > 0) {
        return (
            <div style={{width:"100%"}}>
                <VictoryChart
                    // adding the material theme provided with Victory
                    theme={VictoryTheme.material}
                    domainPadding={50}
                    height={250}
                    width={300}
                >
                    <VictoryAxis
                        style={{tickLabels: {fill: "#006e95", fontSize: 5}, axis:{stroke: "#006e95"}, ticks:{stroke: "#006e95"}, grid: {
                                stroke: '#10bbfc',
                                strokeDasharray: '10',
                                strokeWidth: "0.5"
                            }}}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{tickLabels: {fill: "#006e95", fontSize: 10}, axis:{stroke: "#006e95"}, ticks:{stroke: "#006e95"}, grid: {
                                stroke: '#10bbfc',
                                strokeDasharray: '10',
                                strokeWidth: "0.5"
                            }}}
                    />
                    <VictoryBar
                        barRatio={0.8}
                        data={genres.slice(0,5)}
                        x="_id"
                        y="count"
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                        style={{
                            data: {fill: "gold"}
                        }}
                    />
                </VictoryChart>
            </div>)
    }
    return <h4>No content available</h4>;
}