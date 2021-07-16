import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../img/logotul_01.webp";
import Logo2 from "../../img/logotul_02.webp";

const Logo = () => {
    return (
        <Link to="/home" className="logoLink">
            <img
                src={Logo1}
                alt="KatedraLogo"
                className="komLogo"
                height="80"
                width="80"
            />
            <img
                src={Logo2}
                alt="KatedraLogo"
                className="komLogo"
                height="80"
                width="172"
            />
        </Link>
    );
};

export default Logo;
