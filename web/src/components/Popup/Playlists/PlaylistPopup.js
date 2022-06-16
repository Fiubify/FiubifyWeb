import TracksWrapper from "./TracksWrapper";
import PropTypes from "prop-types";
import OwnersWrapper from "./OwnersWrapper";

export default function PlaylistPopup({ trigger, setTrigger, playlist }) {
  if (playlist) {
    const { _id, title, owners, description } = playlist;
    return trigger ? (
      <div className="popup">
        <div className="popup-extern">
          <div className="popup-inner">
            <h2>{title}</h2>
            <h4>Description</h4>
            <p>{description}</p>
            <h4>Owners</h4>
            <OwnersWrapper users={owners} />
            <h4>Tracks</h4>
            <TracksWrapper playlist_id={_id} />
            <button className="close-btn" onClick={() => setTrigger(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  } else {
    return "";
  }
}

PlaylistPopup.propTypes = {
  playlist: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    owners: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string,
      })
    ),
    collaborative: PropTypes.bool.isRequired,
  }),
};
