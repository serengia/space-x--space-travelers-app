import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <div className={`${s["header-container"]} row`}>
        <span className={s["logo"]}>
          <img src="./logo-traveler.png" alt="" />{" "}
          <span>Space Travelers Hub</span>
        </span>
        <nav>
          <ul className={s["nav-list"]}>
            <li className={s["nav-list-item"]}>
              <NavLink
                to="/"
                className={(link) => (link.isActive ? "nav-active-link" : "")}
              >
                Rockets
              </NavLink>
            </li>
            <li className={s["nav-list-item"]}>
              <NavLink
                to="/missions"
                className={(link) => (link.isActive ? "nav-active-link" : "")}
              >
                Missions
              </NavLink>
            </li>
            <li className={s["nav-list-item"]}>
              <NavLink
                to="/my-profile"
                className={(link) => (link.isActive ? "nav-active-link" : "")}
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
