import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "./contact.css";

const Contacts = () => {
    const location = useLocation();
    let info = location.state.id;
    const navigate = useNavigate();
    const composeMessage = () => {
        navigate("/contactinfo/message", { state: { id: info } })
    }
    return (
        <>
            <Navbar />
            <div className="mid-section">
                <div className="select-contact">
                    <div>
                        <h1 className="generate-otp-text">Contact Information</h1>
                        <div className="generate-otp-text mrgn"> <span style={{ color: "red" }}> Name: </span><span>{info.name}</span></div>
                        <div className="generate-otp-text mrgn"> <span style={{ color: "red" }}> Phone: </span><span>{info.phone}</span></div>
                        <button className="displayMessage" onClick={composeMessage}>Compose Message</button>
                        <div className="contacts-icon-container">
                            <img className="logo-img" src="https://static.thenounproject.com/png/108014-200.png" alt="contacts-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;