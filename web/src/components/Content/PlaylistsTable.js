import {useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {playlistsData} from "../../utils/playlistData";
import PlaylistRow from "./PlaylistRow";

export default function PlaylistsTable() {
    const [popupOn, setPopupOn] = useState(false);
    const [playlist2Show, setPlaylist2Show] = useState(null);

    /*const [content, setContent] = useState([]);
    async function fetchContent() {
        //const apiResponse = await getPlaylists();
        //setContent(apiResponse.data);
    }

    useEffect(() => {
        fetchContent();
    }, []);*/

    return (<div>
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Collaborative</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playlistsData.map((playlist,key) => (<PlaylistRow
                            key={key}
                            //key={playlist.title}
                            playlist={playlist}
                            turnOnPopup={setPopupOn}
                            setPlaylist2Show={setPlaylist2Show}
                        />))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        {/*<AlbumTracksPopup trigger={popupOn} setTrigger={setPopupOn} album={playlist2Show}></AlbumTracksPopup>*/}
    </div>);
}