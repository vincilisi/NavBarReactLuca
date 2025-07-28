import './popup.css'
import McImg from "../assets/media/mc.png";
const Popup = ({ onConfirm, onCancel }) => {
    return (
        <div className="dynamic-popup">
            <img className="imglogo" src={McImg} alt="logo" />
            <p>Do you want to empty your cart permanently?</p>
            <div className="dynamic-popup-buttons">
                <button className='con-canc' onClick={onConfirm}>Sì, svuota</button>
                <button className='con-canc' onClick={onCancel}>Annulla</button>
            </div>
        </div>
    );
};

export default Popup;
