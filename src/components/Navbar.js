import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.mode}  bg-${props.mode}`}
    >
      <div className="container-fluid">

        <a  id='navtitle' className="navbar-brand" href="https://dhruvjoshi307.github.io/textutils">

          {props.title}
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://dhruvjoshi307.github.io/textutils">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li> */}
          </ul>
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group me-2" role="group" aria-label="First group">
    <button type="button"  id="primary_btn" className="btn btn-info mx-2 rounded-1" onClick={()=>props.toggeleMode('info')} style={{width:"32px", height:"30px", cursor:"pointer"}}></button>
    <button type="button"  id="danger_btn" className="btn btn-danger mx-2 rounded-1" onClick={()=>props.toggeleMode('danger')} style={{width:"32px", height:"30px", cursor:"pointer"}} ></button>
    <button type="button" id="success_btn" className="btn btn-success mx-2 rounded-1" onClick={()=>props.toggeleMode('success')} style={{width:"32px", height:"30px", cursor:"pointer"}} ></button>
    <button type="button" id="warning_btn" className="btn btn-warning mx-2 rounded-1" onClick={()=>props.toggeleMode('warning')} style={{width:"32px", height:"30px", cursor:"pointer"}} ></button>
  </div>
  </div>
          <div
            className={`form-check form-switch text text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={()=>props.toggeleMode()}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = { title: "set title", aboutText: "set about here" };
