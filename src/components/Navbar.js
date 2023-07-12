import { useNavigate } from "react-router-dom";
import "../styles/Global.css";
import "../styles/Navbar.css";
// import Login from "./Login";

const NavigationBar = ({ onLoginClick }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <span className="brand">DATING APP</span>
          <div className="nav">
            <div className="link" onClick={() => navigate("/")}>
              Home
            </div>
            <div className="link" onClick={() => navigate("/explore")}>
              Explore
            </div>
            <div className="link" onClick={onLoginClick}>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
