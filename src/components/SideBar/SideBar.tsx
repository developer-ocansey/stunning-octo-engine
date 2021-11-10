import { FunctionComponent } from "react";
import {
  IoGridOutline,
  IoHelpBuoyOutline,
  IoLogOutOutline,
  IoMegaphoneOutline,
  IoNewspaperOutline,
  IoPeopleOutline,
  IoReceiptOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import { isActive, logout } from "../../utils";
import "./style.scss";

const SideBar: FunctionComponent<any> = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-category">Dashboard</li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/dashboard")}`}
              to="/dashboard"
            >
              <IoGridOutline className="menu-icon" />
              <span className="menu-title">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/dashboard/wallet")}`}
              to="/dashboard/wallet"
            >
              <IoWalletOutline className="menu-icon" />
              <span className="menu-title">Client Wallet</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/dashboard/accounts")}`}
              to="/dashboard/accounts"
            >
              <IoPeopleOutline className="menu-icon" />
              <span className="menu-title">View Accounts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/dashboard/transactions")}`}
              to="/dashboard/transactions"
            >
              <IoReceiptOutline className="menu-icon" />
              <span className="menu-title"> Transactions</span>
            </Link>
          </li>
          <li className="nav-item nav-category">Support</li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://globalttravelwallet.atlassian.net"
              target="_blank"
              rel="noreferrer"
            >
              <IoMegaphoneOutline className="menu-icon" />
              <span className="menu-title">Create a ticket</span>
            </a>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/dashboard/support")}`}
              to="/dashboard/support"
            >
              <IoHelpBuoyOutline className="menu-icon" />
              <span className="menu-title">Emergency support</span>
            </Link>
          </li>
          <li className="nav-item nav-category">Developers</li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://documenter.getpostman.com/view/1762951/TzsWtVXo"
              target="_blank"
              rel="noreferrer"
            >
              <IoNewspaperOutline className="menu-icon" />
              <span className="menu-title">API Documentation</span>
            </a>
          </li>
          <li className="nav-item nav-category">Setting</li>
          <li className="nav-item">
            <p className="nav-link" onClick={() => logout()}>
              <IoLogOutOutline className="menu-icon" />
              <span className="menu-title">Log out</span>
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
};

SideBar.defaultProps = {};

export default SideBar;
