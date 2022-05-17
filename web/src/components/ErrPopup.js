import './ErrPopup.css'
import {useNavigate} from "react-router-dom";

function ErrPopup({trigger, setTrigger, status, message, dest}) {
    const navigate = useNavigate();
    return (trigger) ? (<div className="popup">
            <div className="popup-inner">
                <h3>Error {status}</h3>
                <p>{message}</p>
                <button className="close-btn" onClick={() => {
                    setTrigger(false);
                    navigate(dest);
                }}>Received
                </button>
            </div>
        </div>) : "";
}

export default ErrPopup;