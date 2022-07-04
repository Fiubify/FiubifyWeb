import {contentMetricsUrl, freeTier, userMetricsUrl} from "../constantes";
import axios from "axios";

export async function getAllContentMetrics(){
    try {
        let response = await axios.get(
            contentMetricsUrl
        );
        return response.data;
    } catch (e) {
        throw e;
    }
}

export async function getAllUsersMetrics(){
    try {
        let response = await axios.get(
            userMetricsUrl
        );
        return response.data;
    } catch (e) {
        throw e;
    }
}

export function getMetricsQtyForDate(date, metrics) {
    let qty = 0;
    metrics.forEach((metric) => {
        if (new Date(Date.parse(metric.createdAt)).toDateString() === (new Date(Date.parse(date)).toDateString())) {
            qty += 1;
        }
    })
    //console.log("Date: ", new Date(Date.parse(date)).toDateString(), " --> qty: ", qty);
    return qty.valueOf();
}

export function filterMetricsByAction(metrics, action) {
    let metricsFiltered = [];

    metrics.forEach((metric) => {
        if (metric.action === action)
            metricsFiltered.push(metric);
    })

    return metricsFiltered;
}

export function filterContentByTier(content, isFree) {
    let contentFiltered = [];

    content.forEach((contentMetric) => {
        if (((contentMetric.tier === freeTier) && isFree) || ((contentMetric.tier !== freeTier) && !isFree))
            contentFiltered.push(contentMetric);
    })

    return contentFiltered;
}

export function filterUserMetricByType(users, type) {
    let usersFiltered = [];

    users.forEach((userMetric) => {
        if (userMetric.type === type)
            usersFiltered.push(userMetric);
    })

    return usersFiltered;
}