import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleLogout = () => {
    setBtnName("Login");
    setShowLogin(false);
    setPopupMessage("Oops, you logged out!");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length !== 5) {
      setMessage("Password must be exactly 5 characters!");
    } else {
      setBtnName("Logout");
      setShowLogin(false);
      setPopupMessage("Successful login foodie");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <span className="m4u-text">M4U</span>
      </div>
      <div className="nav-container">
        <div className="nav-items">
          <ul>
            <button className="Home">Home</button>
            <button className="About Us">About Us</button>
            <button className="Contact Us">Contact Us</button>
            <button className="Cart">Cart</button>
            <button
              className="btn2"
              onClick={btnName === "Login" ? handleLogin : handleLogout}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
      {showLogin && (
        <div className="login-modal">
          <div className="login-content">
            <span className="close" onClick={() => setShowLogin(false)}>
              &times;
            </span>
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label className="floating-label">Username</label>
                <input
                  type="text"
                  required
                  className="input-field full-width"
                />
              </div>
              <div className="input-container">
                <label className="floating-label">Password</label>
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="input-field full-width"
                    maxLength="5"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁️" : "🙈"}
                  </span>
                </div>
              </div>
              {message && (
                <div
                  className="error-message"
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  {message}
                </div>
              )}
              <div className="button-group">
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>
            </form>
            <button className="signup-btn" onClick={() => setShowSignup(true)}>
              Sign Up
            </button>
          </div>
        </div>
      )}
      {showSignup && (
        <div className="signup-modal">
          <div className="signup-content">
            <span className="close" onClick={() => setShowSignup(false)}>
              &times;
            </span>
            <h2 className="signup-title">Sign Up</h2>
            <form>
              <div className="input-container">
                <label className="floating-label">New Username</label>
                <input
                  type="text"
                  required
                  className="input-field full-width"
                />
              </div>
              <div className="input-container">
                <label className="floating-label">Password</label>
                <div className="password-container">
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    required
                    className="input-field full-width"
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  >
                    {showSignupPassword ? "👁️" : "🙈"}
                  </span>
                </div>
              </div>
              <div className="input-container">
                <label className="floating-label">Confirm Password</label>
                <div className="password-container">
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    required
                    className="input-field full-width"
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  >
                    {showSignupPassword ? "👁️" : "🙈"}
                  </span>
                </div>
              </div>
              <div className="button-group">
                <button type="submit" className="signup-btn">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showPopup && (
        <div
          className="popup-message"
          style={{
            position: "fixed",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "black",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {popupMessage}
        </div>
      )}
    </div>
  );
};
export default Header;
