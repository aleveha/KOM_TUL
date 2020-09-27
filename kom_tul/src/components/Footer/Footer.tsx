import * as React from 'react';
import WebSiteMap from "./WebSiteMap";
import '../../CSS/Footer.css';
import ContactsLine from "./ContactsLine";
import CopyRight from "./CopyRight";

interface IProps {

}

const Footer = (props: IProps) => {
    return (
        <footer className="footer">
            <hr />
            <WebSiteMap />
            <hr />
            <ContactsLine />
            <hr />
            <CopyRight />
        </footer>
    );
}

export default Footer;