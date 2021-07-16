import * as React from "react";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
import "../../CSS/Header.css";
import Logo from "../Common/Logo";
import BigHeader from "./BigHeader";

const Header = () => {
    const [hideShadow, setHideShadow] = useState<boolean>(true);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    window.addEventListener("scroll", () => {
        window.pageYOffset > 0 ? setHideShadow(false) : setHideShadow(true);
    });

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    return (
        <header
            className="header"
            style={hideShadow ? {} : { boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
            <div className="header-content">
                <Logo />
                {windowWidth >= 1100 ? <BigHeader /> : <MobileHeader />}
            </div>
        </header>
    );
};

export default Header;
