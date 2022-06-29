import {contentMetricsUrl, userMetricsUrl} from "../constantes";
import axios from "axios";

export async function getAllContentMetrics(){
    try {
        let response = await axios.get(
            contentMetricsUrl
        );
        console.log("content metrics: ", response.data)
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