import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import PropTypes from "prop-types";
import AlbumRow from "./AlbumRow";
import {useState} from "@types/react";
import AlbumTracksPopup from "../Popup/AlbumTracksPopup";

export default function AlbumsTable({content}) {
    const [popupOn, setPopupOn] = useState(false);
    const [album2Show, setAlbum2Show] = useState(null);

    return (<div>
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Artist_ID</TableCell>
                            <TableCell>Tier</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {content.map((album) => (<AlbumRow
                            key={album._id}
                            album={album}
                            turnOnPopup={setPopupOn}
                            setAlbum2Show={setAlbum2Show}
                        />))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <AlbumTracksPopup trigger={popupOn} setTrigger={setPopupOn} album={album2Show}></AlbumTracksPopup>
    </div>);
}

AlbumsTable.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tracks: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            artist_id: PropTypes.any.isRequired,
            album_id: PropTypes.any.isRequired,
            duration: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            tier: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired,
            description: PropTypes.string,
        })),
        artist_id: PropTypes.any.isRequired,
        tier: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};