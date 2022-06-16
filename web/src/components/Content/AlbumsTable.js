import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";
import AlbumRow from "./AlbumRow";
import { useState, useEffect } from "react";
import AlbumPopup from "../Popup/Albums/AlbumPopup";
import { getAlbums } from "../../utils/api/contentApi";

export default function AlbumsTable() {
  const [popupOn, setPopupOn] = useState(false);
  const [album2Show, setAlbum2Show] = useState(null);

  const [content, setContent] = useState([]);
  async function fetchContent() {
    const apiResponse = await getAlbums();
    setContent(apiResponse.data);
  }

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div>
      <div>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#006e95" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>View more</TableCell>
                <TableCell sx={{ color: "white" }}>Title</TableCell>
                <TableCell sx={{ color: "white" }}>Artist_ID</TableCell>
                <TableCell sx={{ color: "white" }}>Tier</TableCell>
                <TableCell sx={{ color: "white" }}>Genre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {content.map((album) => (
                <AlbumRow
                  //TODO el back tendria que devolver el _id para poder tomarlo como key
                  key={album.title}
                  album={album}
                  turnOnPopup={setPopupOn}
                  setAlbum2Show={setAlbum2Show}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <AlbumPopup
        trigger={popupOn}
        setTrigger={setPopupOn}
        album={album2Show}
      ></AlbumPopup>
    </div>
  );
}

AlbumsTable.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      tracks: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          artistId: PropTypes.string.isRequired,
          albumId: PropTypes.string.isRequired,
          duration: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
          tier: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired,
          description: PropTypes.string,
        })
      ),
      artistId: PropTypes.string.isRequired,
      tier: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    }).isRequired
  ),
};
