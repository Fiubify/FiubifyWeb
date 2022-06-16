import { Button, Chip, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import { BiWindowOpen } from "react-icons/bi";

export default function SongRow({ song, turnOnPopup, setSongDescription }) {
  const { title, artistId, albumId, duration, url, tier, genre } = song;

  return (
    <TableRow>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>
        <Button
          onClick={() => {
            setSongDescription(song);
            turnOnPopup(true);
          }}
          sx={{ color: "black" }}
        >
          <BiWindowOpen />
        </Button>
      </TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>{title}</TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>
        {artistId}
      </TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>
        {albumId}
      </TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>
        {duration}
      </TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>{url}</TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>{tier}</TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>{genre}</TableCell>
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
