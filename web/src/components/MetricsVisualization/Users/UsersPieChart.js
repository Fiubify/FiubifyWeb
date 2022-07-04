import {VictoryPie} from "victory";
import {useEffect, useState} from "react";
import {filterUsersByPlan, getUsers} from "../../../utils/api/usersApi";

export function UsersPieChart() {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        const apiResponse = await getUsers();
        setUsers(apiResponse.data);
    }

    useEffect(() => {
        fetchUsers().then();
    }, []);

    if (users.length > 0) {
        const freeUsers = filterUsersByPlan(users, true);
        const data = [
            {x: "Free-Users", y: freeUsers.length},
            {x: "Premium-Users", y: (users.length-freeUsers.length)},
        ]
        return (<div>
            <h4>Amarillo --> Email</h4>
            <h4>Naranja --> Federated</h4>
            <VictoryPie
                colorScale={["tomato", "orange"]}
                data={data}
                animate={{
                    duration: 2000
                }}
                height={200}
            />
        </div>)
    }
    return "";
}