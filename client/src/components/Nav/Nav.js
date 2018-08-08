import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


const Navbar = () => (

  <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">

    <div className="navbar-nav">
      <Link to="/" className="navbar">
        <a> <span className="fa fa-bolt" /> JockeyExpress <span className="fa fa-bolt" /></a>
      </Link>
    </div>
    <button
      className="navbar-toggler ml-auto"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon my-toggler" />
    </button>
    <div className="navbar-collapse collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            <span className="fa fa-home" />  Home
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/SearchHorses" className={window.location.pathname === "/SearchHorses" ? "nav-link active" : "nav-link"}>
            <span className="fa fa-eye" /> Search Horses
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/AddHorse" className={window.location.pathname === "/AddHorse" ? "nav-link active" : "nav-link"}>
            <span className="fa fa-plus" /> Add Horse
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/AllHorses" className={window.location.pathname === "/AllHorses" ? "nav-link active" : "nav-link"}>
            <span className="fa fa-list-ul" /> View All Horses
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/Yearlings" className={window.location.pathname === "/Yearlings" ? "nav-link active" : "nav-link"}>
            <span className="fa fa-th-list" /> Yearlings
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/Weanlings" className={window.location.pathname === "/Weanlings" ? "nav-link active" : "nav-link"}>
            <span className="fa fa-th-list" />  Weanlings
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>
            <span className="fa fa-info-circle" /> About
        </Link>
        </li>
      </ul>
    </div>
  </nav>
);


export default Navbar;
