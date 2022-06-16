import { Button, Chip, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import { BiWindowOpen } from "react-icons/bi";

export default function PlaylistRow({
  playlist,
  turnOnPopup,
  setPlaylist2Show,
}) {
  const { title, collaborative } = playlist;

  return (
    <TableRow>
      <TableCell sx={{ borderBottom: "2px solid #006e95", width: "10%" }}>
        <Button
          onClick={() => {
            setPlaylist2Show(playlist);
            turnOnPopup(true);
          }}
          sx={{ color: "black" }}
        >
          <BiWindowOpen />
        </Button>
      </TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>{title}</TableCell>
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
