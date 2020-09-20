import * as React from 'react';
import WebSiteMap from "./WebSiteMap";
import '../../CSS/Footer.css';
import ContactsLine from "./ContactsLine";
import CopyRight from "./CopyRight";

interface IProps {
    tabs: Array<string>
}

const Footer = (props: IProps) => {
    return (
        <footer className="footer">
            <WebSiteMap tabs={props.tabs}/>
            <ContactsLine />
            <CopyRight />
        </footer>
    );
}

export default Footer;