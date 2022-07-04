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
                        barRatio={0.8}
                        data={genres.slice(0,5)}
                        x="_id"
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