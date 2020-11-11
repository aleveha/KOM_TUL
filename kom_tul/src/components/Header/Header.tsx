import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../../img/logotul1_01.png';
import Logo2 from '../../img/logotul_02.png';
import HistoryWay from "../MainContent/HistoryWay";
import MobileHeader from "./MobileHeader";
import '../../CSS/Header.css';
import {useState} from "react";

const Header = () => {
    const [hideShadow, setHideShadow] = useState<boolean>(true);
    window.addEventListener('scroll', () => {
        window.pageYOffset > 0 ? setHideShadow(false) : setHideShadow(true);
    })

    return (
        <header className="header" style={hideShadow ? {} : {boxShadow: "0 0 10px rgba(0,0,0,0.5)"}}>
            <div className="header-content">
                <div className="komLogoContainer">
                    <Link to="/home" className="logoLink" >
                        <img src={Logo1} alt="KatedraLogo" className="komLogo"/>
                        <img src={Logo2} alt="KatedraLogo" className="komLogo"/>
                    </Link>
                </div>
                <MobileHeader />
            </div>
            <HistoryWay/>
        </header>
    );
}

export default Header;