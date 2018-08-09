import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="centerText">
            <br />
            <a href="https://github.com/jhanisusM" class="btn btn-dark">
                <span className="fa fa-github"></span>
            </a>
            <a href="https://www.linkedin.com/in/jhanisus/" className="btn btn-dark">
                <span className="fa fa-linkedin-square"></span>
            </a>
            <a href="https://stackoverflow.com/users/8730147/jhanisusm" className="btn btn-dark">
                <span className="fa fa-stack-overflow"></span>
            </a>
        </div>

    )
};

export default Footer;