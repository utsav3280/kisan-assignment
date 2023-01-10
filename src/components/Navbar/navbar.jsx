import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo-box">
                <img className="logo-img" src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png" alt="brand-logo" />
                <h1 className="logo-text">OTPfy</h1>
            </div>
            <div className="logo-box">
                <button className="nav-btns">About Us</button>
                <button className="nav-btns">Pricing</button>
                <button className="nav-btns">Contact</button>
            </div>
        </div>
    )
}

export default Navbar;