import { Chip, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";

export default function PlaylistRow({
  playlist,
  turnOnPopup,
  setPlaylist2Show,
}) {
  const { title, collaborative } = playlist;

  return (
    <TableRow>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>
        <Chip
          label={title}
          variant="outlined"
          onClick={() => {
            setPlaylist2Show(playlist);
            turnOnPopup(true);
          }}
        />
      </TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }} role={"status"}>
        <Chip
          color={collaborative ? "success" : "error"}
          label={String(collaborative).toUpperCase()}
        />
      </TableCell>
    </TableRow>
  );
}

PlaylistRow.propTypes = {
  playlist: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    owners: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string,
      })
    ),
    collaborative: PropTypes.bool.isRequired,
  }).isRequired,
};
