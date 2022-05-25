import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import SongRow from "./SongRow";
import PropTypes from "prop-types";
import {useState} from "@types/react";
import SongDescriptionPopup from "../Popup/SongDescriptionPopup";

export default function SongsTable({content}) {
    const [popupOn, setPopupOn] = useState(false);
    const [song2Describe, setSong2Describe] = useState(null);

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
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {content.map((song) => (<SongRow
                            key={song._id}
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
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        artist_id: PropTypes.any.isRequired,
        album_id: PropTypes.any.isRequired,
        duration: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired).isRequired,
};