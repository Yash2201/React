import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//import "../src/App.css";

export default function Navbar(props) {
    // const handleThmeColor= (event)=>{
    //     props.updateTheme(event.target.value);        
    // }

    return (
        <nav
            className={`navbar navbar-expand-lg bg-${props.mode} ${props.mode === 'light' ? "" : 'navbar-dark'}`}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">{props.titleAbout}</Link>
                        </li>
                    </ul>
                
                    {/* <div className="d-flex border rounded-pill mx-2 bg-white" >
                        <button className="mx-1 btn btn-primary rounded-circle is-active" value='primary' onClick={handleThmeColor}></button>
                        <button className="mx-1 btn btn-secondary rounded-circle" value='secondary' onClick={handleThmeColor}></button>
                        <button className="mx-1 btn btn-danger rounded-circle" value='danger' onClick={handleThmeColor}></button>
                        <button className="mx-1 btn btn-success rounded-circle" value='success' onClick={handleThmeColor} ></button>
                        <button className="mx-1 btn btn-warning rounded-circle" value='warning' onClick={handleThmeColor}></button>
                        <button className="mx-1 btn btn-dark rounded-circle" value='dark' onClick={handleThmeColor}></button>
                    </div> */}
                    <div className={`d-flex form-check form-switch mx-2 ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>
                        <input
                            className="form-check-input"
                            onChange={props.toggleMode}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                        />
                        <label
                            className="form-check-label mx-2"
                            htmlFor="flexSwitchCheckChecked"
                        >{props.mode === 'light' ? `Enable Dark Mode` : `Enable Light Mode`}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    titleAbout: PropTypes.string,
};

Navbar.defaultProps = {
    title: "Set title here",
    titleAbout: "About",
};
