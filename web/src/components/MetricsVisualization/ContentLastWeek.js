import PropTypes from "prop-types";
import { VictoryBar, VictoryChart, VictoryPortal, VictoryStack, VictoryTheme} from "victory";

function getMetricsQtyForDate(date, content) {
    let qty = 0;
    content.forEach((contentMetric) => {
        if (new Date(Date.parse(contentMetric.createdAt)).toDateString() === (new Date(Date.parse(date)).toDateString())) {
            qty += 1;
        }
    })
    //console.log("Date: ", new Date(Date.parse(date)).toDateString(), " --> qty: ", qty);
    return qty;
}

function VictoryLabel() {
    return null;
}

export function ContentLastWeek({content}) {
    if (content.length > 0) {
        const data = [
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 7)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 7)).getMonth() + 1}`,
                metricsQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 7)).toDateString(), content),
                label: "L"
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 6)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 6)).getMonth() + 1}`,
                metricsQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 6)).toDateString(), content),
                label: "L"
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 5)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 5)).getMonth() + 1}`,
                metricsQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 5)).toDateString(), content),
                label: "L"
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 4)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 4)).getMonth() + 1}`,
                metricsQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 4)).toDateString(), content),
                label: "L"
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 3)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 3)).getMonth() + 1}`,
                metricsQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 3)).toDateString(), content),
                label: "L"
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 2)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 2)).getMonth() + 1}`,
                metricsQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 2)).toDateString(), content),
                label: "L"
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 1)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 1)).getMonth() + 1}`,
                metricsQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 1)).toDateString(), content),
                label: "L"
            },
            {
                day: `${new Date().getDate()}-${new Date().getMonth() + 1}`,
                metricsQty: getMetricsQtyForDate(new Date().toDateString(), content),
                label: "L"
            },
        ];

        return (<VictoryChart
            // adding the material theme provided with Victory
            theme={VictoryTheme.material}
            domainPadding={20}
            height={200}
            width={600}
        >
            <VictoryStack
                colorScale={["gold", "orange"]}
                style={{
                    data: {width: 30},
                    labels: {padding: -20}
                }}
                labelComponent={
                    <VictoryPortal>
                        <VictoryLabel/>
                    </VictoryPortal>
                }
            >
                <VictoryBar
                    data={data}
                    x="day"
                    y="metricsQty"
                    animate={{
                        duration: 2000,
                        onLoad: {duration: 1000}
                    }}
                />
                <VictoryBar
                    data={data}
                    x="day"
                    y="metricsQty"
                    animate={{
                        duration: 2000,
                        onLoad: {duration: 1000}
                    }}
                />
            </VictoryStack>
        </VictoryChart>)
    }

    return "";
}

ContentLastWeek.propTypes = {
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