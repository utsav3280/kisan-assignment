import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../message/message.css";
import Navbar from "../Navbar/navbar";

const Message = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const details = location.state.id;
    let otp = parseInt(Math.random() * 1000000);
    details.otp = otp;
    const message = `Hi. Your OTP is ${otp}`;

    const sendMessage = () => {
        axios.post("https://kisan-backend.onrender.com/messages", details)
            .then((res) => {
                if (res.data.status === "success") {
                    alert("OTP sent Successfully")
                    navigate("/");
                }
                else {
                    alert("Failed. Phone Number is not verified on Twilio")
                    console.log(res.data.error);
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <Navbar />
            <div className="mid-section">
                <div className="select-contact">
                    <div className="box">
                        <h1 className="generate-otp-text">Send OTP..</h1>
                        <input type="text" defaultValue={message} className="input-field" />
                        <button className="send-message-btns" id="send-btn" onClick={sendMessage}>Send</button>
                        <button className="send-message-btns" id="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
                        <div className="contacts-icon-container">
                            <img className="logo-img" src="https://cdn-icons-png.flaticon.com/512/3682/3682321.png" alt="contacts-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message;