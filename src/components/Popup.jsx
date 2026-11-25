import "./Popup.css";                             
import linkIcon from "../assets/link-icon.svg";    

function Popup (props) {
    return(
        <div className="popup">
            <h2>{props.name}</h2> 
        </div>
    );
}

export default Popup; 