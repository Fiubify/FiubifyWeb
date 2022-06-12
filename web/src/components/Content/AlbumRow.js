import {Chip, TableCell, TableRow} from "@mui/material";
import PropTypes from "prop-types";

export default function AlbumRow({album, turnOnPopup, setAlbum2Show}) {
    const {title, artistId, tier} = album;

    return (<TableRow>
        <TableCell><Chip label={title} variant="outlined" onClick={() => {
            setAlbum2Show(album);
            turnOnPopup(true);
        }}/></TableCell>
        <TableCell>{artistId}</TableCell>
        <TableCell>{tier}</TableCell>
    </TableRow>);
}

AlbumRow.propTypes = {
    album: PropTypes.shape({
        title: PropTypes.string.isRequired,
        artistId: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
    }).isRequired,
};