import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {getTracksFromPlaylist} from "../../utils/api/contentApi";

export default function TracksWrapper({playlist_id}) {
    const [content, setContent] = useState([]);
    async function fetchContent() {
        const apiResponse = await getTracksFromPlaylist(playlist_id);
        console.log(apiResponse.data);
        setContent(apiResponse.data);
    }

    useEffect(() => {
        fetchContent();
    }, []);

    if (content.tracks) {
        return(<div>
            {content.tracks.map((track) => (<p>
                {track.title}
            </p>))}
        </div>)
    } else {
        return (<p>No tracks available</p>)
    }

}

TracksWrapper.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        owners: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string,
        })),
        collaborative: PropTypes.bool.isRequired,
        tracks: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            artistId: PropTypes.string.isRequired,
            albumId: PropTypes.string.isRequired,
            duration: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            tier: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired,
            description: PropTypes.string,
        })).isRequired,
    }).isRequired),
};