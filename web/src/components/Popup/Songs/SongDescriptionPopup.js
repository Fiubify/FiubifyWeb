import "./SongDescriptionPopup.css";
import PropTypes from "prop-types";
import DescriptionWrapper from "./DescriptionWrapper";

export default function SongDescriptionPopup({ trigger, setTrigger, song }) {
  if (song) {
    const { title, description } = song;
    return trigger ? (
      <div className="popup">
        <div className="popup-extern">
          <div className="popup-inner">
            <h2>{title}</h2>
            <DescriptionWrapper description={description} />
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

SongDescriptionPopup.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artistId: PropTypes.string.isRequired,
    albumId: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    tier: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};
