import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "../messageList/list";
import Navbar from "../Navbar/navbar";
import "./home.css";
const logo = require("../images/logo.png")

const Home = () => {
    const [list, setList] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://kisan-backend.onrender.com").then((res) => setList(res.data.contacts)).catch((err) => console.log(err))
    }, [])

    const showContact = (e) => {
        navigate("/contactinfo", { state: { id: list[e.target.value] } })
    }

    return (
        <>
            <Navbar />
            {
                showMessage ? <div className="mid-section"> <List /> </div> :
                    <div className="mid-section">
                        <div className="select-contact">
                            <div>
                                <h1 className="generate-otp-text">Generate a new OTP</h1>
                                <select className="select-btn" onChange={(e) => showContact(e)}>
                                    <option value="">Select Contact</option>
                                    {
                                        list.map((ele, idx) => {
                                            return (
                                                <option className="options" key={idx} value={idx}>{ele.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="contacts-icon-container">
                                    <img className="logo-img" src={logo} alt="contacts-logo" />
                                </div>
                            </div>
                        </div>
                        <div className="select-contact">
                            <div>
                                <h1 className="generate-otp-text">Older Messages</h1>
                                <button className="displayMessage" onClick={() => setShowMessage(!showMessage)}>{showMessage ? "Hide Messages" : "Show Messages"}</button>
                                <div className="contacts-icon-container">
                                    <img className="logo-img" src="https://cdn0.iconfinder.com/data/icons/buno-chat-message/32/__history_message_chat-512.png" alt="contacts-logo" />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Home;