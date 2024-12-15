import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import useAuth from "../../../hooks/useAuth";
import gif from "../../../images/blood-donate.gif";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  const { user, admin, logOut } = useAuth();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className=" pb-2 nav-logo text-left d-flex">
          <img
            className="me-3 rounded-circle"
            src={gif}
            alt=""
            width="58"
            height="52"
          />
          <div className="nav-name">Life Blood-Bank</div>
        </NavLink>
        <ul
          id="item-container"
          className={click ? "nav-menu active" : "nav-menu"}
        >
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/donor"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Donor
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/be-a-donar"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Be A Donor
            </NavLink>
          </li>

          {admin === true ? (
            <li className="nav-item">
              <NavLink
                to="/admindashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                className="menu-name"
              >
                Dashboard
              </NavLink>
            </li>
          ) : (
            user?.email && (
              <li className="nav-item">
                <NavLink
                  to="/userdashboard"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                  className="menu-name"
                >
                  Dashboard
                </NavLink>
              </li>
            )
          )}

          <li className="nav-item">
            <NavLink
              to="/contact-us"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item ">
            {user.email ? (
              <Nav.Link>
                <button className="btn btn-danger" onClick={logOut}>
                  LOGOUT
                </button>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                <button className="btn btn-danger">LOGIN</button>
              </Nav.Link>
            )}
          </li>
          <li className="user-name">{user?.displayName}</li>
        </ul>
        <div className="nav-icon " onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
