import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import SongRow from "./SongRow";
import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import SongDescriptionPopup from "../Popup/SongDescriptionPopup";
import {getSongs} from "../../utils/api/contentApi";

export default function SongsTable() {
    const [popupOn, setPopupOn] = useState(false);
    const [song2Describe, setSong2Describe] = useState(null);

    const [content, setContent] = useState([]);
    async function fetchContent() {
        const apiResponse = await getSongs();
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
                            <TableCell>Artist_ID</TableCell>
                            <TableCell>Album_ID</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>URL</TableCell>
                            <TableCell>Tier</TableCell>
                            <TableCell>Genre</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {content.map((song) => (<SongRow
                            key={song.url}
                            song={song}
                            turnOnPopup={setPopupOn}
                            setSongDescription={setSong2Describe}
                        />))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <SongDescriptionPopup trigger={popupOn} setTrigger={setPopupOn} song={song2Describe}></SongDescriptionPopup>
    </div>);
}

SongsTable.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        artistId: PropTypes.string.isRequired,
        albumId: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired),
};