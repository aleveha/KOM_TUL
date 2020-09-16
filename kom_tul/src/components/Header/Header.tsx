import * as React from 'react';
import HeaderButtons from "./HeaderButtons";
import '../../CSS/Header.css';

interface IProps {
    appLang: string,
    changeLang: (value: string) => void
}

const Header = (props: IProps) => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="kom-logo">
                    <img src="../../img/kom.png" alt="logo katedry"></img>
                </div>
                <HeaderButtons/>
                <div className="langButton">
                    <a href="#" className="cng-lang"
                       onClick={() => props.changeLang(props.appLang === 'CZ' ? 'EN' : 'CZ')}>{props.appLang !== 'CZ' ? 'CZ' : 'EN'}</a>
                </div>
            </div>
        </div>
    );
}

export default Header;