import './ErrPopup.css'

function ErrPopup({trigger, setTrigger, status, message}) {
    return (trigger) ? (<div className="popup">
        <div className="popup-inner">
            <h3>Error {status}</h3>
            <p>{message}</p>
            <button className="close-btn" onClick={() => setTrigger(false)}>Received
            </button>
        </div>
    </div>) : "";
}

export default ErrPopup;