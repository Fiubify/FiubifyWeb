import {TableCell, TableRow} from "@mui/material";
import PropTypes from "prop-types";

export default function SongRow({song}) {
    const {_id, title, description, duration, artist, url, tier, album} = song;

    return (
        <TableRow>
            <TableCell>{_id}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{description}</TableCell>
            <TableCell>{duration}</TableCell>
            <TableCell>{artist}</TableCell>
            <TableCell>{url}</TableCell>
            <TableCell>{tier}</TableCell>
            <TableCell>{album}</TableCell>
        </TableRow>
    );
}

SongRow.propTypes = {
    song: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        artist_id: PropTypes.any.isRequired,
        album_id: PropTypes.any.isRequired,
        duration: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};