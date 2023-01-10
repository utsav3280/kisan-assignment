import axios from "axios";
import { useEffect, useState } from "react";
import "./list.css";

const List = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        axios.get("https://kisan-backend.onrender.com/messages").then((res) => setMessages(res.data.list)).catch((err) => console.log(err))
    })
    return (
        <>
            <button className="back-btn" onClick={() => window.location.reload()}>Go Back</button>
            <div className="table-container">
                <table className="table-box">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>OTP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messages.map((ele, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{ele.name}</td>
                                        <td>{ele.date.split("GMT")[0]}</td>
                                        <td>{ele.otp}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default List;