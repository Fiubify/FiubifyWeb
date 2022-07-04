import {useEffect, useState} from "react";
import {VictoryPie} from "victory";
import {filterContentByPlan, getSongs} from "../../../utils/api/contentApi";

export function SongsTierPieChart() {
    const [songs, setSongs] = useState([]);

    async function fetchUsers() {
        const apiResponse = await getSongs();
        setSongs(apiResponse.data);
        console.log("songs: ", songs);
    }

    useEffect(() => {
        fetchUsers().then();
    }, []);

    if (songs.length > 0) {
        const freeUsers = filterContentByPlan(songs, true);
        console.log("freeUsers: ", freeUsers.length)
        const data = [
            {x: "Free-Songs", y: freeUsers.length},
            {x: "Premium-Songs", y: (songs.length - freeUsers.length)},
        ]
        return (
            <VictoryPie
                colorScale={["tomato", "orange"]}
                data={data}
                animate={{
                    duration: 2000
                }}
                height={200}
            />
        )
    }
    return "";
}