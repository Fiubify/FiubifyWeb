import {useEffect, useState} from "react";
import {getTopSongsListened} from "../../../utils/api/metricsApi";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryTheme} from "victory";

export function TopSongsChart() {
    const [songs, setSongs] = useState([]);

    async function fetchContent() {
        const apiResponse = await getTopSongsListened();
        console.log("top songs: ", apiResponse.data);
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