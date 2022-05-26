import {Chip, TableCell, TableRow} from "@mui/material";
import PropTypes from "prop-types";

export default function SongRow({song, turnOnPopup, setSongDescription}) {
    const {title, artistId, albumId, duration, url, tier, genre} = song;

    return (
        <TableRow>
            <TableCell><Chip label={title} variant="outlined" onClick={() => {
                setSongDescription(song);
                turnOnPopup(true);
            }}>{title}</Chip></TableCell>
            <TableCell>{artistId}</TableCell>
            <TableCell>{albumId}</TableCell>
            <TableCell>{duration}</TableCell>
            <TableCell>{url}</TableCell>
            <TableCell>{tier}</TableCell>
            <TableCell>{genre}</TableCell>
        </TableRow>
    );
}

SongRow.propTypes = {
    song: PropTypes.shape({
        title: PropTypes.string.isRequired,
        artistId: PropTypes.string.isRequired,
        albumId: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};