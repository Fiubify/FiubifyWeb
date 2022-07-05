import {useEffect, useState} from "react";
import {filterMetricsByAction, getAllUsersMetrics} from "../../../utils/api/metricsApi";
import {
    loginUserAction,
    signupUserAction
} from "../../../utils/constantes";
import {UserMetricsByDayChar} from "./UserMetricsByDayChart";
import {UsersPieChart} from "./UsersPieChart";

export function UserMetricsGraphs() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsersMetrics().then((users) => setUsers(users.data));
    }, []);

    if (users.length > 0) {
        return (<div>
            <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
            }}>
                <div style={{width: "45%"}}>
                    <h1>Last week's logins</h1>
                    <UserMetricsByDayChar users={filterMetricsByAction(users, loginUserAction)}/>
                </div>
                <div style={{width: "45%"}}>
                    <h1>Last week's signups</h1>
                    <UserMetricsByDayChar users={filterMetricsByAction(users, signupUserAction)}/>
                </div>
            </div>
            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: "2%",
                marginBottom: "-3%"
            }}>
                <h1 style={{width: "100%", marginBottom:"3%", marginTop:"2%"}}>Users Proportion by Plan</h1>
                <UsersPieChart/>
            </div>
        </div>);
    }
    return "";
}