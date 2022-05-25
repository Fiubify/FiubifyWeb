import {TableCell, TableRow} from "@mui/material";
import PropTypes from "prop-types";

export default function AlbumRow({album}) {
    const {_id, title, tracks, artist_id, tier} = album;
    //mostrar tracks como popup al clickear el title
    return (<TableRow>
            <TableCell>{_id}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{artist_id}</TableCell>
            <TableCell>{tier}</TableCell>
        </TableRow>);
}

AlbumRow.propTypes = {
    album: PropTypes.shape({
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
    }).isRequired,
};