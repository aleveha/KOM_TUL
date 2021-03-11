import React from 'react';
import {Link} from "react-router-dom";
import Logo1 from "../../img/logotul1_01.webp";
import Logo2 from "../../img/logotul_02.webp";

const Logo = () => {
    return (
        <Link to="/home" className="logoLink">
            <img src={Logo1} alt="KatedraLogo" className="komLogo"/>
            <img src={Logo2} alt="KatedraLogo" className="komLogo"/>
        </Link>
    );
};

export default Logo;