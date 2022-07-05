import {useEffect, useState} from "react";
import {VictoryPie, VictoryLabel} from "victory";
import {filterContentByPlan, getSongs} from "../../../utils/api/contentApi";

export function SongsTierPieChart() {
    const [songs, setSongs] = useState([]);

    async function fetchContent() {
        const apiResponse = await getSongs();
        setSongs(apiResponse.data);
    }

    useEffect(() => {
        fetchContent().then();
    }, []);

    if (songs.length > 0) {
        const freeSongs = filterContentByPlan(songs, true);
        const data = [
            {x: "Free-Songs", y: freeSongs.length},
            {x: "Premium-Songs", y: (songs.length - freeSongs.length)},
        ]

        return (
            <VictoryPie
                labelComponent={<VictoryLabel style={{fontSize: 7, fontStyle:"italic", fill:"#006e95"}} />}
                padding={{top: 15, bottom: 50}}
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