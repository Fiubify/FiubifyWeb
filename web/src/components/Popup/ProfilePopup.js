import './ProfilePopup.css'
import PropTypes from "prop-types";

function ProfilePopup({trigger, setTrigger, user}) {
    //const {_id, uid, email, role, disabled} = user;
    if (user) {
        const {name, surname, birthdate, plan} = user;
        return (trigger) ? (<div className="popup">
            <div className="popup-inner">
                <title>User Profile</title>
                <h5>Name: {name}</h5>
                <h5>Surname: {surname}</h5>
                <h5>Birthdate: {birthdate}</h5>
                <h5>Plan: {plan}</h5>
                <button className="close-btn" onClick={() => setTrigger(false)}>Close
                </button>
            </div>
        </div>) : "";
    } else {
        return "";
    }


}

export default ProfilePopup;

ProfilePopup.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        birthdate: PropTypes.any.isRequired,
        plan: PropTypes.string.isRequired,
    }),
};