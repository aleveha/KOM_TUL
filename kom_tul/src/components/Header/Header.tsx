import * as React from 'react';
import HistoryWay from "../MainContent/HistoryWay";
import MobileHeader from "./MobileHeader";
import '../../CSS/Header.css';
import {useState} from "react";
import Logo from "../Common/Logo";
import mobileCheck from "../Common/mobileCheck";

const Header = () => {
    const [hideShadow, setHideShadow] = useState<boolean>(true);
    window.addEventListener('scroll', () => {
        window.pageYOffset > 0 ? setHideShadow(false) : setHideShadow(true);
    })

    return (
        <header className="header" style={hideShadow ? {} : {boxShadow: "0 0 10px rgba(0,0,0,0.5)"}}>
            <div className="header-content">
                <Logo />
                <MobileHeader />
            </div>
        </header>
    );
}

export default Header;