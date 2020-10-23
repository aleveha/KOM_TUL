import * as React from 'react';
import HeaderButtons from "./HeaderButtons";
import '../../CSS/Header.css';
// import LanguageContext from "../../Context/LanguageContext";
// import {useContext} from "react";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Logo1 from '../../img/logotul1_01.png';
import Logo2 from '../../img/logotul_02.png';
import HistoryWay from "../MainContent/HistoryWay";

const Header = () => {
    // const language = useContext(LanguageContext);
    return (
        <header className="header">
            <div className="header-content">
                <div className="kom-logo">
                    <Link to="/home" className="logoLink">
                        <img src={Logo1} alt="KatedraLogo"/>
                        <img src={Logo2} alt="KatedraLogo"/>
                    </Link>
                </div>
                <HeaderButtons />
                <div className="langButton">
                    <p className="cng-lang"
                       onClick={() => {
                           // language.changeValue(language.value === 'CZ' ? 'EN' : 'CZ');
                           toast.warn("Změna jazyka ještě není k dispozici.", { autoClose: 3000, position: "bottom-center" });
                       }} >EN{/*language.value !== 'CZ' ? 'CZ' : 'EN'*/}</p>
                </div>
            </div>
            <HistoryWay/>
        </header>
    );
}

export default Header;