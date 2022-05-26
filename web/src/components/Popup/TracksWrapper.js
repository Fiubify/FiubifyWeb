import PropTypes from "prop-types";

export default function TracksWrapper({tracks}) {
    return (tracks) ? (
        <div>
            {tracks.map((track) => (<p>
                {track.title}
            </p>))}
        </div>
    ) : (<div>
        <p>No songs available</p>
    </div>);
}

TracksWrapper.propTypes = {
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
};