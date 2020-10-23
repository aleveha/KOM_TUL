import * as React from 'react';
import WebSiteMap from "./WebSiteMap";
import '../../CSS/Footer.css';
import ContactsLine from "./ContactsLine";
import CopyRight from "./CopyRight";
import {useState} from "react";

const Footer = () => {
    const [showMap, setShowMap] = useState<boolean>(false);

    return (
        <footer className="footer">
            <hr />
            <WebSiteMap showMap={showMap} changeValueShowMap={setShowMap}/>
            {showMap && <hr/>}
            <ContactsLine />
            <hr />
            <CopyRight />
        </footer>
    );
}

export default Footer;