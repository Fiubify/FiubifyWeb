import { filterUserMetricByType, getMetricsQtyForDate} from "../../../utils/api/metricsApi";
import {VictoryBar, VictoryChart, VictoryStack, VictoryTheme} from "victory";
import PropTypes from "prop-types";
import {
    emailUserType,
    federatedUserType,
} from "../../../utils/constantes";

export function UserMetricsByDayChar({users}) {
    if (users.length > 0) {
        const emailActions = filterUserMetricByType(users, emailUserType);
        const federatedActions = filterUserMetricByType(users, federatedUserType);

        const data = [
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 7)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 7)).getMonth() + 1}`,
                emailActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 7)).toDateString(), emailActions),
                federatedActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 7)).toDateString(), federatedActions),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 6)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 6)).getMonth() + 1}`,
                emailActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 6)).toDateString(), emailActions),
                federatedActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 6)).toDateString(), federatedActions),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 5)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 5)).getMonth() + 1}`,
                emailActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 5)).toDateString(), emailActions),
                federatedActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 5)).toDateString(), federatedActions),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 4)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 4)).getMonth() + 1}`,
                emailActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 4)).toDateString(), emailActions),
                federatedActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 4)).toDateString(), federatedActions),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 3)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 3)).getMonth() + 1}`,
                emailActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 3)).toDateString(), emailActions),
                federatedActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 3)).toDateString(), federatedActions),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 2)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 2)).getMonth() + 1}`,
                emailActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 2)).toDateString(), emailActions),
                federatedActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 2)).toDateString(), federatedActions),
            },
            {
                day: `${new Date(new Date().setDate(new Date().getDate() - 1)).getDate()}-${new Date(new Date().setDate(new Date().getDate() - 1)).getMonth() + 1}`,
                emailActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 1)).toDateString(), emailActions),
                federatedActionQty: getMetricsQtyForDate(new Date(new Date().setDate(new Date().getDate() - 1)).toDateString(), federatedActions),
            },
            {
                day: `${new Date().getDate()}-${new Date().getMonth() + 1}`,
                emailActionQty: getMetricsQtyForDate(new Date().toDateString(), emailActions),
                federatedActionQty: getMetricsQtyForDate(new Date().toDateString(), federatedActions),
            },
        ];

        return (
            <div>
                <h4>Amarillo --> Email</h4>
                <h4>Naranja --> Federated</h4>
                <VictoryChart
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
                    >
                        <VictoryBar
                            data={data}
                            x="day"
                            y="emailActionQty"
                            animate={{
                                duration: 2000,
                                onLoad: {duration: 1000}
                            }}
                        />
                        <VictoryBar
                            data={data}
                            x="day"
                            y="federatedActionQty"
                            animate={{
                                duration: 2000,
                                onLoad: {duration: 1000}
                            }}
                        />
                    </VictoryStack>
                </VictoryChart>
            </div>)
    }
    return (<h4>No content available</h4>)
}

UserMetricsByDayChar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            action: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            createdAt: PropTypes.instanceOf(Date).isRequired,
            userUId: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};