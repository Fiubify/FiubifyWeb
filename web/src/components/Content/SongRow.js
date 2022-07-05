import {Button, Chip, TableCell, TableRow} from "@mui/material";
import PropTypes from "prop-types";
import {BiWindowOpen} from "react-icons/bi";
import ButtonWithLoading from "../Buttons/ButtonWithLoading";

export default function SongRow({song, turnOnPopup, setSongDescription, handleBlockSong, handleUnblockSong}) {
    const { _id, title, artistId, albumId, duration, url, tier, genre, disabled} = song;
    const buttonText = disabled ? "Unblock" : "Block";
    const buttonAction = disabled ? handleUnblockSong : handleBlockSong;

    return (
        <TableRow>
            <TableCell sx={{borderBottom: "2px solid #006e95"}}>
                <Button
                    onClick={() => {
                        setSongDescription(song);
                        turnOnPopup(true);
                    }}
                    sx={{color: "black"}}
                >
                    <BiWindowOpen/>
                </Button>
            </TableCell>
            <TableCell sx={{borderBottom: "2px solid #006e95"}}>{title}</TableCell>
            <TableCell sx={{borderBottom: "2px solid #006e95"}}>
                {artistId}
            </TableCell>
            <TableCell sx={{borderBottom: "2px solid #006e95"}}>
                {albumId}
            </TableCell>
            <TableCell sx={{borderBottom: "2px solid #006e95"}}>
                {duration}
            </TableCell>
            <TableCell sx={{borderBottom: "2px solid #006e95"}}>{url}</TableCell>
            <TableCell sx={{borderBottom: "2px solid #006e95"}}>{tier}</TableCell>
            <TableCell sx={{borderBottom: "2px solid #006e95"}}>{genre}</TableCell>
            <TableCell sx={{ borderBottom: "2px solid #006e95" }} role={"status"}>
                <Chip
                    color={disabled ? "error" : "success"}
                    label={String(disabled).toUpperCase()}
                />
            </TableCell>
            <TableCell sx={{ borderBottom: "2px solid #006e95" }} align="center">
                <ButtonWithLoading
                    variant={"contained"}
                    onClickHandler={() => buttonAction(_id)}
                >
                    {buttonText}
                </ButtonWithLoading>
            </TableCell>
        </TableRow>
    );
}

SongRow.propTypes = {
    song: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        artistId: PropTypes.string.isRequired,
        albumId: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        description: PropTypes.string,
        disabled: PropTypes.bool.isRequired,
    }).isRequired,
    handleBlockSong: PropTypes.func.isRequired,
    handleUnblockSong: PropTypes.func.isRequired,
};
