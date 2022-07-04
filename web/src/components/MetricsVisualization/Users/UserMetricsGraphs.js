import {useEffect, useState} from "react";
import {filterMetricsByAction, getAllUsersMetrics} from "../../../utils/api/metricsApi";
import {
    loginUserAction,
    signupUserAction
} from "../../../utils/constantes";
import {UserMetricsByDayChar} from "./UserMetricsByDayChart";

export function UserMetricsGraphs() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsersMetrics().then((users) => setUsers(users.data));
    }, []);

    if (users.length > 0) {
        return (<div>
            <h2>Last week's logins</h2>
            <UserMetricsByDayChar users={filterMetricsByAction(users, loginUserAction)}/>
            <h2>Last week's signups</h2>
            <UserMetricsByDayChar users={filterMetricsByAction(users, signupUserAction)}/>
        </div>);
    }
    return "";
}