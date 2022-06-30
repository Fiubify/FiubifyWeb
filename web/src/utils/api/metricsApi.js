import {contentMetricsUrl, userMetricsUrl} from "../constantes";
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
        console.log("user metrics: ", response.data)
        return response.data;
    } catch (e) {
        throw e;
    }
}

export function getMetricsQtyForDate(date, content) {
    let qty = 0;
    content.forEach((contentMetric) => {
        if (new Date(Date.parse(contentMetric.createdAt)).toDateString() === (new Date(Date.parse(date)).toDateString())) {
            qty += 1;
        }
    })
    //console.log("Date: ", new Date(Date.parse(date)).toDateString(), " --> qty: ", qty);
    return qty.valueOf();
}

