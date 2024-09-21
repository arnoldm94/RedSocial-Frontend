import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TheHeader.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

const TheHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());

    navigate("/login");
  };

  return (
    <>
      <nav>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-menu-link">
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li className="nav-menu-item">
                <Link to="/profile" className="nav-menu-link">
                  {user.name}
                </Link>
              </li>
              <li className="nav-menu-item">
                <button onClick={onLogout} className="nav-menu-button">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-menu-item">
                <Link to="/login" className="nav-menu-link">
                  Login
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/register" className="nav-menu-link">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default TheHeader;
