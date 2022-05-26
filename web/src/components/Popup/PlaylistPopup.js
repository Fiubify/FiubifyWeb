import TracksWrapper from "./TracksWrapper";
import PropTypes from "prop-types";
import OwnersWrapper from "./OwnersWrapper";

export default function PlaylistPopup({trigger, setTrigger, playlist}) {
    if (playlist){
        const {title, ownerIds, trackIds, description} = playlist;
        console.log(ownerIds);
        return (trigger) ? (<div className="popup">
            <div className="popup-inner">
                <h2>{title}</h2>
                <h4>Description</h4>
                <p>{description}</p>
                <h4>Owners</h4>
                <OwnersWrapper users={ownerIds}/>
                <h4>Tracks</h4>
                <TracksWrapper tracks={trackIds}/>
                <button className="close-btn" onClick={() => setTrigger(false)}>Close
                </button>
            </div>
        </div>) : "";
    } else {
        return "";
    }
}

PlaylistPopup.propTypes = {
    playlist: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        ownerIds: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
        })),
        collaborative: PropTypes.bool.isRequired,
        trackIds: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
        })),
    }),
}