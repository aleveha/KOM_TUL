import * as React from 'react';
import HeaderButtons from "./HeaderButtons";
import '../../CSS/Header.css';
import LanguageContext from "../../Context/LanguageContext";
import {useContext} from "react";

interface IProps {

}

const Header = (props: IProps) => {
    const language = useContext(LanguageContext);

    return (
        <header className="header">
            <div className="header-content">
                <div className="kom-logo">
                    <span>KOM</span>
                </div>
                <HeaderButtons />
                <div className="langButton">
                    <a className="cng-lang"
                       onClick={() => language.changeValue(language.value === 'CZ' ? 'EN' : 'CZ')} >{language.value !== 'CZ' ? 'CZ' : 'EN'}</a>
                </div>
            </div>
        </header>
    );
}

export default Header;