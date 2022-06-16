import "./ProfilePopup.css";
import PropTypes from "prop-types";

function ProfilePopup({ trigger, setTrigger, user }) {
  if (user) {
    const { name, surname, birthdate, plan } = user;
    return trigger ? (
      <div className="popup">
        <div className="popup-extern">
          <div className="popup-inner">
            <h2>User Profile</h2>
            <h5>Name: {name}</h5>
            <h5>Surname: {surname}</h5>
            <h5>Birthdate: {birthdate}</h5>
            <h5>Plan: {plan}</h5>
            <button className="close_btn" onClick={() => setTrigger(false)}>
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

export default ProfilePopup;

ProfilePopup.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    birthdate: PropTypes.any,
    plan: PropTypes.string.isRequired,
  }),
};
