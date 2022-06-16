import { Button, Chip, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import { BiWindowOpen } from "react-icons/bi";

export default function AlbumRow({ album, turnOnPopup, setAlbum2Show }) {
  const { title, artistId, tier, genre } = album;

  return (
    <TableRow>
      <TableCell sx={{ borderBottom: "2px solid #006e95", width: "10%" }}>
        <Button
          onClick={() => {
            setAlbum2Show(album);
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
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>{tier}</TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>{genre}</TableCell>
    </TableRow>
  );
}

AlbumRow.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artistId: PropTypes.string.isRequired,
    tier: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};
