import './AlbumTracksPopup.css'
import PropTypes from "prop-types";
import AlbumRow from "../Content/AlbumRow";
import AlbumTracks from "./AlbumTracks";

export default function AlbumPopup({trigger, setTrigger, album}) {
    if (album){
        const {title, tracks} = album;
        return (trigger) ? (<div className="popup">
            <div className="popup-inner">
                <h2>{title}</h2>
                <h4>Tracks</h4>
                <AlbumTracks tracks={tracks}/>
                <button className="close-btn" onClick={() => setTrigger(false)}>Close
                </button>
            </div>
        </div>) : "";
    } else {
        return "";
    }
}

AlbumRow.propTypes = {
    album: PropTypes.shape({
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
    }),
};