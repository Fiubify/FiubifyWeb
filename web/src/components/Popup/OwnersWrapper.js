import PropTypes from "prop-types";

export default function OwnersWrapper({users}) {
    return (users) ? (
        <div>
            {users.map((user) => (<h6>
                {user._id}
            </h6>))}
        </div>
    ): ((<div>
        <h6>No owners available</h6>
    </div>));
}

OwnersWrapper.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        uid: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        disabled: PropTypes.bool.isRequired,
    })),
};