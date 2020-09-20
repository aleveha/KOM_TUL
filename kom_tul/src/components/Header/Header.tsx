import * as React from 'react';
import HeaderButtons from "./HeaderButtons";
import '../../CSS/Header.css';

interface IProps {
    appLang: string,
    changeLang: (value: string) => void,
    changePathWay: (value: Array<string>) => void,
    pathWay: Array<string>,
    tabs: Array<string>
}

const Header = (props: IProps) => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="kom-logo">
                    <span>KOM</span>
                </div>
                <HeaderButtons
                    changePathWay={props.changePathWay}
                    pathArr={props.pathWay}
                    tabs={props.tabs}
                />
                <div className="langButton">
                    <a href="#" className="cng-lang"
                       onClick={() => props.changeLang(props.appLang === 'CZ' ? 'EN' : 'CZ')}>{props.appLang !== 'CZ' ? 'CZ' : 'EN'}</a>
                </div>
            </div>
        </header>
    );
}

export default Header;