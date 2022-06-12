import PropTypes from "prop-types";

export default function OwnersWrapper({users}) {
    return (users) ? (
        <div>
            {users.map((user) => (<p>
                {user.name} ({user.id})
            </p>))}
        </div>
    ): ((<div>
        <h6>No owners available</h6>
    </div>));
}

OwnersWrapper.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string,
    })),
};