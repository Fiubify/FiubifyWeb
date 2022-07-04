import {useEffect, useState} from "react";
import {getTopListenedFor} from "../../../utils/api/metricsApi";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryTheme} from "victory";
import {topSongsUrl} from "../../../utils/constantes";

export function TopSongsChart() {
    const [songs, setSongs] = useState([]);

    async function fetchContent() {
        const apiResponse = await getTopListenedFor(topSongsUrl);
        setSongs(apiResponse.data);
    }

    useEffect(() => {
        fetchContent().then();
    }, []);

    if (songs.length > 0) {
        return (
            <div>
                <VictoryChart
                    // adding the material theme provided with Victory
                    theme={VictoryTheme.material}
                    domainPadding={50}
                    height={200}
                    width={300}
                >
                    <VictoryAxis
                        style={{tickLabels: {fontSize: 7}}}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{tickLabels: {fontSize: 10}}}
                    />
                    <VictoryBar
                        data={songs}
                        x="_id.songName"
                        y="count"
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                        style={{
                            data: {fill: f => f.fill}
                        }}
                    />
                </VictoryChart>
            </div>)
    }
    return <h4>No content available</h4>;
}