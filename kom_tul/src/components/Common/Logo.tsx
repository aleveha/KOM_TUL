import React from 'react';
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Logo1 from "../../img/logotul1_01.png";
import Logo2 from "../../img/logotul_02.png";

const Logo = () => {
    return (
        <Link to="/home" className="logoLink">
            <LazyLoadImage src={Logo1} alt="KatedraLogo" className="komLogo"/>
            <LazyLoadImage src={Logo2} alt="KatedraLogo" className="komLogo"/>
        </Link>
    );
};

export default Logo;