import {filterContentByTier, getMetricsQtyForDate} from "../../../utils/api/metricsApi";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme} from "victory";
import PropTypes from "prop-types";

export function SongsByDayBarChar({content}) {
    if (content.length > 0) {
        const data = [
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 7)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 7)).getMonth() + 1}`,
                songsFreeQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 7)).toDateString(), filterContentByTier(content, true)),
                songsPremiumQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 7)).toDateString(), filterContentByTier(content, false)),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 6)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 6)).getMonth() + 1}`,
                songsFreeQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 6)).toDateString(), filterContentByTier(content, true)),
                songsPremiumQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 6)).toDateString(), filterContentByTier(content, false)),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 5)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 5)).getMonth() + 1}`,
                songsFreeQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 5)).toDateString(), filterContentByTier(content, true)),
                songsPremiumQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 5)).toDateString(), filterContentByTier(content, false)),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 4)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 4)).getMonth() + 1}`,
                songsFreeQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 4)).toDateString(), filterContentByTier(content, true)),
                songsPremiumQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 4)).toDateString(), filterContentByTier(content, false)),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 3)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 3)).getMonth() + 1}`,
                songsFreeQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 3)).toDateString(), filterContentByTier(content, true)),
                songsPremiumQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 3)).toDateString(), filterContentByTier(content, false)),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 2)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 2)).getMonth() + 1}`,
                songsFreeQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 2)).toDateString(), filterContentByTier(content, true)),
                songsPremiumQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 2)).toDateString(), filterContentByTier(content, false)),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 1)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 1)).getMonth() + 1}`,
                songsFreeQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 1)).toDateString(), filterContentByTier(content, true)),
                songsPremiumQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 1)).toDateString(), filterContentByTier(content, false)),
            },
            {
                day: `${new Date().getDate()}-${new Date().getMonth() + 1}`,
                songsFreeQty: getMetricsQtyForDate(new Date().toDateString(), filterContentByTier(content, true)),
                songsPremiumQty: getMetricsQtyForDate(new Date().toDateString(), filterContentByTier(content, false)),
            },
        ];

        return (
            <div>
                <h4 style={{color: "#006e95"}}>Amarillo --> Free</h4>
                <h4 style={{color: "#006e95"}}>Naranja --> Premium</h4>
                <VictoryChart
                    // adding the material theme provided with Victory
                    theme={VictoryTheme.material}
                    domainPadding={20}
                    height={300}
                    width={600}
                >
                    <VictoryAxis
                        style={{tickLabels: {fill: "#006e95"}, axis:{stroke: "#006e95"}, ticks:{stroke: "#006e95"}, grid: {
                                stroke: '#10bbfc',
                                strokeDasharray: '10',
                                strokeWidth: "0.5"
                            }}}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{tickLabels: {fill: "#006e95"}, axis:{stroke: "#006e95"}, ticks:{stroke: "#006e95"}, grid: {
                                stroke: '#10bbfc',
                                strokeDasharray: '10',
                                strokeWidth: "0.5"
                            }}}
                    />
                    <VictoryStack
                        colorScale={["gold", "orange"]}
                        style={{
                            data: {width: 30},
                            labels: {padding: -20, color: "#006e95"}
                        }}
                    >
                        <VictoryBar
                            data={data}
                            x="day"
                            y="songsFreeQty"
                            animate={{
                                duration: 2000,
                                onLoad: {duration: 1000}
                            }}
                        />
                        <VictoryBar
                            data={data}
                            x="day"
                            y="songsPremiumQty"
                            animate={{
                                duration: 2000,
                                onLoad: {duration: 1000}
                            }}
                        />
                    </VictoryStack>
                </VictoryChart>
            </div>)
    }
    return (<h4 style={{color: "#006e95"}}>No content available</h4>)
}

SongsByDayBarChar.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            action: PropTypes.string.isRequired,
            albumId: PropTypes.string.isRequired,
            albumName: PropTypes.string.isRequired,
            createdAt: PropTypes.instanceOf(Date).isRequired,
            genre: PropTypes.string.isRequired,
            songId: PropTypes.string.isRequired,
            songName: PropTypes.string.isRequired,
            tier: PropTypes.string.isRequired,
            userUId: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};