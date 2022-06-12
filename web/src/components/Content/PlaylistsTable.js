import {useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import PlaylistRow from "./PlaylistRow";
import PlaylistPopup from "../Popup/Playlists/PlaylistPopup";
import {getPlaylists} from "../../utils/api/contentApi";
import PropTypes from "prop-types";

export default function PlaylistsTable() {
    const [popupOn, setPopupOn] = useState(false);
    const [playlist2Show, setPlaylist2Show] = useState(null);

    const [content, setContent] = useState([]);
    async function fetchContent() {
        const apiResponse = await getPlaylists();
        setContent(apiResponse.data);
    }

    useEffect(() => {
        fetchContent();
    }, []);

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
                    {<TableBody>
                        {content.map((playlist) => (<PlaylistRow
                            key={playlist._id}
                            //key={playlist.title}
                            playlist={playlist}
                            turnOnPopup={setPopupOn}
                            setPlaylist2Show={setPlaylist2Show}
                        />))}
                    </TableBody>}
                </Table>
            </TableContainer>
        </div>
        <PlaylistPopup trigger={popupOn} setTrigger={setPopupOn} playlist={playlist2Show}></PlaylistPopup>
    </div>);
}

PlaylistsTable.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        owners: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string,
        })),
        collaborative: PropTypes.bool.isRequired,
    }).isRequired),
}