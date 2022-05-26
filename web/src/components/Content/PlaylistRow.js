import {Chip, TableCell, TableRow} from "@mui/material";
import PropTypes from "prop-types";

export default function PlaylistRow({playlist, turnOnPopup, setPlaylist2Show}) {
    const {title, collaborative} = playlist;

    return (<TableRow>
        <TableCell><Chip label={title} variant="outlined" onClick={() => {
            setPlaylist2Show(playlist);
            turnOnPopup(true);
        }}>{title}</Chip></TableCell>
        <TableCell role={'status'}>
            <Chip
                color={collaborative ? 'success' : 'error'}
                label={String(collaborative).toUpperCase()}
            />
        </TableCell>
    </TableRow>);
}

PlaylistRow.propTypes = {
    playlist: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        ownersIds: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
        })),
        collaborative: PropTypes.bool.isRequired,
        trackIds: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
        })),
    }).isRequired,
}