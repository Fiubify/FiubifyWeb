import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import SongRow from "./SongRow";
import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import SongDescriptionPopup from "../Popup/Songs/SongDescriptionPopup";
import {blockSong, getSongs, unblockSong} from "../../utils/api/contentApi";
import StatusBar from "../StatusBar/StatusBar";

export default function SongsTable({token}) {
    const [popupOn, setPopupOn] = useState(false);
    const [song2Describe, setSong2Describe] = useState(null);
    const [apiActions, setApiAction] = useState([]);

    const [content, setContent] = useState([]);

    async function fetchContent() {
        const apiResponse = await getSongs();
        setContent(apiResponse.data);
    }

    useEffect(() => {
        fetchContent().then();
    }, []);

    const handleBlockSong = async (id) => {
        const response = await blockSong(id, token);

        if (response.ok) {
            setContent(
                content.map((song) => {
                    if (song._id === id) {
                        song.disabled = true;
                    }

                    return song;
                })
            );
            handleApiAction("ok", `Successfully blocked song ${id}`);
        } else {
            handleApiAction("error", `Error when trying to block song ${id}`);
        }
    };

    const handleUnblockSong = async (id) => {
        const response = await unblockSong(id, token);

        if (response.ok) {
            setContent(
                content.map((song) => {
                    if (song._id === id) {
                        song.disabled = false;
                    }

                    return song;
                })
            );
            handleApiAction("ok", `Successfully unblocked song ${id}`);
        } else {
            handleApiAction("error", `Error when trying to unblock song ${id}`);
        }
    };

    const handleApiAction = (type, message) => {
        setApiAction([{type: type, msg: message}]);
    };

    return (
        <div style={{width: "100%"}}>
            <StatusBar actions={apiActions} />
            <div style={{width: "100%"}}>
                <TableContainer sx={{width: "100%"}}>
                    <Table>
                        <TableHead sx={{backgroundColor: "#006e95"}}>
                            <TableRow>
                                <TableCell sx={{color: "white"}}>View more</TableCell>
                                <TableCell sx={{color: "white"}}>Title</TableCell>
                                <TableCell sx={{color: "white"}}>Artist_ID</TableCell>
                                <TableCell sx={{color: "white"}}>Album_ID</TableCell>
                                <TableCell sx={{color: "white"}}>Duration</TableCell>
                                <TableCell sx={{color: "white"}}>URL</TableCell>
                                <TableCell sx={{color: "white"}}>Tier</TableCell>
                                <TableCell sx={{color: "white"}}>Genre</TableCell>
                                <TableCell sx={{ color: "white" }}>Blocked?</TableCell>
                                <TableCell sx={{ color: "white" }} align="center">
                                    Operation
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {content.map((song) => (
                                <SongRow
                                    key={song.url}
                                    song={song}
                                    turnOnPopup={setPopupOn}
                                    setSongDescription={setSong2Describe}
                                    handleBlockSong={handleBlockSong}
                                    handleUnblockSong={handleUnblockSong}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <SongDescriptionPopup
                trigger={popupOn}
                setTrigger={setPopupOn}
                song={song2Describe}
            ></SongDescriptionPopup>
        </div>
    );
}

SongsTable.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            artistId: PropTypes.string.isRequired,
            albumId: PropTypes.string.isRequired,
            duration: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            tier: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired,
            description: PropTypes.string,
        }).isRequired
    ),
};
