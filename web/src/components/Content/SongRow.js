import {TableCell, TableRow} from "@mui/material";
import PropTypes from "prop-types";

export default function SongRow({song, turnOnPopup, setSongDescription}) {
    const {_id, title, artist_id, album_id,duration, url, tier, genre, description} = song;

    return (
        <TableRow>
            <TableCell><p onClick={() => {
                turnOnPopup(true);
                if (description) {
                    setSongDescription(song);
                }
            }}>{_id}</p></TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{artist_id}</TableCell>
            <TableCell>{album_id}</TableCell>
            <TableCell>{duration}</TableCell>
            <TableCell>{url}</TableCell>
            <TableCell>{tier}</TableCell>
            <TableCell>{genre}</TableCell>
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