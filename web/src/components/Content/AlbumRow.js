import {Chip, TableCell, TableRow} from "@mui/material";
import PropTypes from "prop-types";

export default function AlbumRow({album, turnOnPopup, setAlbum2Show}) {
    const {title, artistId, tier, genre} = album;

    return (<TableRow>
        <TableCell><Chip label={title} variant="outlined" onClick={() => {
            setAlbum2Show(album);
            turnOnPopup(true);
        }}></Chip></TableCell>
        <TableCell>{artistId}</TableCell>
        <TableCell>{tier}</TableCell>
        <TableCell>{genre}</TableCell>
    </TableRow>);
}

AlbumRow.propTypes = {
    album: PropTypes.shape({
        title: PropTypes.string.isRequired,
        artistId: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
    }).isRequired,
};