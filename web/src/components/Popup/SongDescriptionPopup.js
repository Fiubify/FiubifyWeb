import './SongDescriptionPopup.css'
import PropTypes from "prop-types";

export default function SongDescriptionPopup({trigger, setTrigger, song}) {
    const {title, description} = song;
    return (trigger) ? (<div className="popup">
        <div className="popup-inner">
            <h2>{title}</h2>
            <h5>Description: {description}</h5>
            <button className="close-btn" onClick={() => setTrigger(false)}>Close
            </button>
        </div>
    </div>) : "";
}

SongDescriptionPopup.propTypes = {
    song: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
    }),
};