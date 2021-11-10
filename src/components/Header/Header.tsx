import React, { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PARTNER_NAME } from "../../exports";
import { isActive } from "../../utils";
import LogoMin from "./../../assets/images/logo-mini.svg";
import Logo from "./../../assets/images/logo.svg";
import ProfileImage from "./../../assets/images/user.svg";
import "./style.scss";

const Header: FunctionComponent<any> = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    getTimeOfDay();
  }, []);

  const getTimeOfDay = () => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      setTimeOfDay("Good Morning");
    } else if (curHr < 18) {
      setTimeOfDay("Good Afternoon");
    } else {
      setTimeOfDay("Good Evening");
    }
  };
  const Introduction = () => {
    return (
      <>
        {isActive("/dashboard") && (
          <ul className="navbar-nav">
            <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
              <h1 className="welcome-text">
                {timeOfDay},{" "}
                <span className="text-black fw-bold">{PARTNER_NAME}</span>
              </h1>
              <h3 className="welcome-sub-text">
                Overview of your program performance{" "}
              </h3>
            </li>
          </ul>
        )}
      </>
    );
  };
  return (
    <>
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <div className="me-3">
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-bs-toggle="minimize"
            >
              <span className="icon-menu" />
            </button>
          </div>
          <div>
            <Link className="navbar-brand brand-logo" to="/dashboard">
              <img src={Logo} alt="logo" />
            </Link>
            <Link className="navbar-brand brand-logo-mini" to="/dashboard">
              <img src={LogoMin} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-top">
          <Introduction />
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-none d-lg-block">
              <Link className="nav-link" to="/dashboard/profile">
                {PARTNER_NAME}
              </Link>
            </li>
            <li className="nav-item dropdown d-none d-lg-block user-dropdown">
              <Link
                className="nav-link"
                id="UserDropdown"
                to="/dashboard/profile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="img-xs rounded-circle"
                  src={ProfileImage}
                  alt="Profile"
                />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

Header.defaultProps = {};

export default Header;
