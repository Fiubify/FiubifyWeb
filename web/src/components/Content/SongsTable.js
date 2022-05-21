import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import SongRow from "./SongRow";
import PropTypes from "prop-types";

export default function SongsTable({content}) {
    //Analizar cuales campos se van a tener de SONGS
    return (<div>
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Artist</TableCell>
                            <TableCell>URL</TableCell>
                            <TableCell>Tier</TableCell>
                            <TableCell>Album</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {content.map((song) => (<SongRow
                            key={song._id}
                            song={song}
                        />))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>);
}

SongsTable.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        artist: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};