import * as React from 'react';
import HeaderButtons from "./HeaderButtons";
import '../../CSS/Header.css';

interface IProps {
    appLang: string,
    changeLang: (value: string) => void,
    changePathWay: (value: string) => void
}

const Header = (props: IProps) => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="kom-logo">
                    KOM
                </div>
                <HeaderButtons changePathWay={props.changePathWay}/>
                <div className="langButton">
                    <a href="#" className="cng-lang"
                       onClick={() => props.changeLang(props.appLang === 'CZ' ? 'EN' : 'CZ')}>{props.appLang !== 'CZ' ? 'CZ' : 'EN'}</a>
                </div>
            </div>
        </div>
    );
}

export default Header;