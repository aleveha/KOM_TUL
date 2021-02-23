import * as React from 'react';
import WebSiteMap from "./WebSiteMap";
import ContactsLine from "./ContactsLine";
import CopyRight from "./CopyRight";
import {useState} from "react";
import '../../CSS/Footer.css';

const Footer = () => {
    const [showMap, setShowMap] = useState<boolean>(false);

    return (
        <footer className="footer">
            <WebSiteMap showMap={showMap} changeValueShowMap={setShowMap}/>
            <ContactsLine />
            <CopyRight />
        </footer>
    );
}

export default Footer;