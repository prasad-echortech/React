import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>
                    <div class={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Enable Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
Navbar.propTypes = {
    title: PropTypes.string,
    myHome: PropTypes.string,
};

Navbar.defaultProps = {
    title: "default prop",
    myHome: "my default home",
};