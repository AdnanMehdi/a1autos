import React, { Component, useContext } from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import Sticky from "react-stickynode";
import { LocationContext } from "../store/LocationContext";

function CustomNavbar({ mClass, nClass, cClass, slogo, hbtnClass }) {
    const { location, addLocation } = useContext(LocationContext);

    const loc = useLocation();
    const history = useHistory();

    const navigateHome = () => {
        history.push("/");
    };

    return (
        <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
            <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand ${slogo}`} to="/">
                            <img
                                src={require("../img/a1-logo.png")}
                                alt="logo"
                                width="100"
                                height="100"
                            />
                            <img
                                src={require("../img/a1-logo.png")}
                                alt="logo"
                                width="100"
                                height="100"
                                id="site-logo"
                            />
                        </Link>
                        {/* <a href="tel:0477003385" className="mt-2" id="call-btn">
                            <button
                                className={`btn btn_get btn_hover ${hbtnClass} mb-2 mb-md-0`}
                                style={{ border: "3px solid #5E2CED" }}
                            >
                                0477 003 385
                            </button>
                        </a> */}
                        <button
                            className="navbar-toggler collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        role="button"
                                        exact
                                    >
                                        Home
                                    </NavLink>
                                    {/* <div className="mega_menu_inner">
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <ul className="dropdown-menu scroll">
                    <li className="nav-item">
                      <NavLink to="/Home-chat" exact className="item">
                        <span className="img">
                          <span className="rebon_tap">New</span>
                          <img
                            src={require("../img/mega-menu-img/home-chat.jpg")}
                            alt="Prototyping Tool"
                          />
                        </span>
                        <span className="text">Home Chat</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Home-Tracking"
                        exact
                        className="item"
                      >
                        <span className="img">
                          <span className="rebon_tap">New</span>
                          <img
                            src={require("../img/mega-menu-img/home-track.jpg")}
                            alt="Prototyping Tool"
                          />
                        </span>
                        <span className="text">Home Tracking</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Home-event" exact className="item">
                        <span className="img">
                          <span className="rebon_tap">New</span>
                          <img
                            src={require("../img/mega-menu-img/home-event.jpg")}
                            alt="Event"
                          />
                        </span>
                        <span className="text">Home Event</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Home-cloud" exact className="item">
                        <span className="img">
                          <span className="rebon_tap">New</span>
                          <img
                            src={require("../img/mega-menu-img/home12.jpg")}
                            alt="cloud"
                          />
                        </span>
                        <span className="text">Cloud Based Saas</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Home-ERP" exact className="item">
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/erp.jpg")}
                            alt="Prototyping Tool"
                          />
                        </span>
                        <span className="text">Hoeme ERP</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/HomeHosting" exact className="item">
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/hosting.jpg")}
                            alt="Prototyping Tool"
                          />
                        </span>
                        <span className="text">Hoeme Hosting</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/HomeSecurity"
                        exact
                        className="item"
                      >
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/home-security.jpg")}
                            alt="Prototyping Tool"
                          />
                        </span>
                        <span className="text">Hoeme Security</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/home-support"
                        exact
                        className="item"
                      >
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/support.jpg")}
                            alt="Prototyping Tool"
                          />
                        </span>
                        <span className="text">Hoeme Support</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Landing" exact className="item">
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/home14.jpg")}
                            alt="Prototyping Tool"
                          />
                        </span>
                        <span className="text">
                          App Landing (One Page)
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/" exact className="item">
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/Prototyping_Tool.jpg")}
                            alt="Prototyping Tool"
                          />
                        </span>
                        <span className="text">Prototyping Tool</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Payment-processing"
                        exact
                        className="item"
                      >
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/home16.jpg")}
                            alt=""
                          />
                        </span>
                        <span className="text">Payment Processing</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Startup" exact className="item">
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/home15.jpg")}
                            alt=""
                          />
                        </span>
                        <span className="text">Startup</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Digital-marketing" className="item">
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/home11.jpg")}
                            alt="Digital Marketing"
                          />
                        </span>
                        <span className="text">Digital Marketing</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/HR-Management" className="item">
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/home4.jpg")}
                            alt="HR Management"
                          />
                        </span>
                        <span className="text">HR Management</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Home-CRM" exact className="item">
                        <span className="img">
                          <img
                            src={require("../img/mega-menu-img/home3.jpg")}
                            alt="CRM Software"
                          />
                        </span>
                        <span className="text">CRM Software</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div> */}
                                </li>

                                <li className="nav-item" onClick={navigateHome}>
                                    {/* <Link to="#process" className="nav-link">
                                        Process
                                    </Link> */}

                                    <a
                                        href={
                                            loc.pathname === "/"
                                                ? "#process"
                                                : "/#process"
                                        }
                                        className="nav-link"
                                    >
                                        Process
                                    </a>
                                </li>

                                <li className="nav-item" onClick={navigateHome}>
                                    <a
                                        href={
                                            loc.pathname === "/"
                                                ? "#services"
                                                : "/#services"
                                        }
                                        className="nav-link"
                                    >
                                        Services
                                    </a>
                                </li>
                                {/* <li className="dropdown submenu nav-item">
                                <Link
                                    to="./"
                                    title="Pages"
                                    className="dropdown-toggle nav-link"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Pages
                                </Link>
                                <ul
                                    role="menu"
                                    className="dropdown-menu"
                                >
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            title="About"
                                            className="nav-link"
                                            to="/About"
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            title="Process"
                                            className="nav-link"
                                            to="/Process"
                                        >
                                            Process
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            title="Team"
                                            className="nav-link"
                                            to="/Team"
                                        >
                                            Team
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            title="Price"
                                            className="nav-link"
                                            to="/Price"
                                        >
                                            Price
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            title="Faq"
                                            className="nav-link"
                                            to="/Faq"
                                        >
                                            Faq
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            title="SignIn"
                                            className="nav-link"
                                            to="/SignIn"
                                        >
                                            Sign In
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            title="SignUp"
                                            className="nav-link"
                                            to="/SignUp"
                                        >
                                            Sign Up
                                        </NavLink>
                                    </li>
                                </ul>
                            </li> */}
                                {/* <li className="dropdown submenu nav-item">
                                <Link
                                    title="Pages"
                                    className="dropdown-toggle nav-link"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    to="#"
                                >
                                    Portfolio
                                </Link>
                                <ul
                                    role="menu"
                                    className=" dropdown-menu"
                                >
                                    <li className="nav-item">
                                        <NavLink
                                            title="Portfolio 2"
                                            className="nav-link"
                                            to="/Portfolio-2col"
                                        >
                                            Portfolio 2col
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            title="Portfolio 3"
                                            className="nav-link"
                                            to="/Portfolio-3col"
                                        >
                                            Portfolio 3col
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            title="Portfolio Fullwidth"
                                            className="nav-link"
                                            to="/Portfolio-fullwidth-4col"
                                        >
                                            Portfolio fullwidth
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            title="PortfolioSingle"
                                            className="nav-link"
                                            to="/PortfolioSingle"
                                        >
                                            Portfolio Single
                                        </NavLink>
                                    </li>
                                </ul>
                            </li> */}
                                <li className="nav-item dropdown submenu">
                                    <NavLink
                                        title="Blogs"
                                        className="nav-link"
                                        to="/blog-posts/1"
                                    >
                                        Blogs
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        title="Contact"
                                        className="nav-link"
                                        to="/Contact"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                            <div>
                                <a href="tel:0477003385" id="call-btn-nav">
                                    <button
                                        className={`btn btn_get btn_hover ${hbtnClass} mb-2 mb-md-0`}
                                        style={{ border: "3px solid #5E2CED" }}
                                    >
                                        0477 003 385
                                    </button>
                                </a>
                            </div>
                            <div class="dropdown">
                                <button
                                    class={`btn btn_get btn_hover dropdown-toggle ${hbtnClass}`}
                                    type="button"
                                    id="dropdownMenu2"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {location !== "" ? location : "Location"}
                                </button>
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenu2"
                                >
                                    <NavLink to="/" title="Home">
                                        <button
                                            class={`dropdown-item ${
                                                location == "" ? "active" : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("");
                                            }}
                                        >
                                            All Locations
                                        </button>
                                    </NavLink>

                                    <NavLink
                                        to="/Acacia-Ridge"
                                        title="Acacia-Ridge"
                                    >
                                        <button
                                            class={`dropdown-item ${
                                                location === "Acacia Ridge"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Acacia Ridge");
                                            }}
                                        >
                                            Acacia Ridge
                                        </button>
                                    </NavLink>

                                    <NavLink to="/Brisbane" title="Brisbane">
                                        <button
                                            class={`dropdown-item ${
                                                location === "Brisbane"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Brisbane");
                                            }}
                                        >
                                            Birsbane
                                        </button>
                                    </NavLink>

                                    <NavLink to="/Beenleigh" title="Beenleigh">
                                        <button
                                            class={`dropdown-item ${
                                                location === "Beenleigh"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Beenleigh");
                                            }}
                                        >
                                            Beenleigh
                                        </button>
                                    </NavLink>

                                    <NavLink
                                        to="/Coopers-Plains"
                                        title="Coopers-Plains"
                                    >
                                        <button
                                            class={`dropdown-item ${
                                                location === "Coopers Plains"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Coopers Plains");
                                            }}
                                        >
                                            Coopers Plains
                                        </button>
                                    </NavLink>

                                    <NavLink
                                        to="/Gold-Coast"
                                        title="Gold-Coast"
                                    >
                                        <button
                                            class={`dropdown-item ${
                                                location === "Gold Coast"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Gold Coast");
                                            }}
                                        >
                                            Gold Coast
                                        </button>
                                    </NavLink>

                                    <NavLink to="/Ipswich" title="Ipswich">
                                        <button
                                            class={`dropdown-item ${
                                                location === "Ipswich"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Ipswich");
                                            }}
                                        >
                                            Ipswich
                                        </button>
                                    </NavLink>

                                    <NavLink to="/Rocklea" title="Rocklea">
                                        <button
                                            class={`dropdown-item ${
                                                location === "Rocklea"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Rocklea");
                                            }}
                                        >
                                            Rocklea
                                        </button>
                                    </NavLink>

                                    <NavLink to="/Sunnybank" title="Sunnybank">
                                        <button
                                            class={`dropdown-item ${
                                                location === "Sunnybank"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Sunnybank");
                                            }}
                                        >
                                            Sunnybank
                                        </button>
                                    </NavLink>

                                    <NavLink to="/Toowoomba" title="Toowoomba">
                                        <button
                                            class={`dropdown-item ${
                                                location === "Toowoomba"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Toowoomba");
                                            }}
                                        >
                                            Toowoomba
                                        </button>
                                    </NavLink>

                                    <NavLink to="/Underwood" title="Underwood">
                                        <button
                                            class={`dropdown-item ${
                                                location === "Underwood"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Underwood");
                                            }}
                                        >
                                            Underwood
                                        </button>
                                    </NavLink>

                                    <NavLink to="/Woodridge" title="Woodridge">
                                        <button
                                            class={`dropdown-item ${
                                                location === "Woodridge"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                addLocation("Woodridge");
                                            }}
                                        >
                                            Woodridge
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </Sticky>
    );
}

export default CustomNavbar;
